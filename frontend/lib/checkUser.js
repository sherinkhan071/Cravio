console.log("CHECK USER RUNNING");
import { currentUser } from "@clerk/nextjs/server";
import { subscription } from "swr/subscription";

const STRAPI_url =
  (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337")
    .replace(/\/$/, "");

const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    console.log("No user found");
    return null;
  }

  console.log("User found:", user.id);

  if (!STRAPI_API_TOKEN) {
    console.error("STRAPI_API_TOKEN is missing in .env.local");
    return null;
  }

  const subscriptionTier = "free";

  try {
    console.log("STRAPI_url =", STRAPI_url);
    const url =
`${STRAPI_url}/api/userprofiles?filters[clerkId][$eq]=${user.id}`;

console.log("FETCH URL:", url);

const existstingUserResponse = await fetch(url, {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!existstingUserResponse.ok) {
  const errorText = await existstingUserResponse.text();

  console.error(
    "Failed to fetch user from Strapi:",
    existstingUserResponse.status,
    errorText
  );

  return null;
}

    const existingUserData = await existstingUserResponse.json();
    console.log("STRAPI RESPONSE:", existingUserData);

    if (existingUserData.data.length > 0) {
  const existingUser = existingUserData.data[0];

      if (existingUser.subscriptionTier !== subscriptionTier) {
        await fetch(`${STRAPI_url}/api/userprofiles`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  subscriptionTier,
}),
          
        });
      }

      return {
  ...existingUser,
  subscriptionTier,
};
    }


    const userData = {
  username:
    user.username ||
    user.emailAddresses[0].emailAddress.split("@")[0],

  clerkId: user.id,

  email: user.emailAddresses[0].emailAddress,

  firstName: user.firstName || "",

  lastName: user.lastName || "",

  imageUrl: user.imageUrl || "",

  subscriptionTier,
};

   console.log("POST URL:", `${STRAPI_url}/api/userprofiles`);

const newUserResponse = await fetch(`${STRAPI_url}/api/userprofiles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
  data: userData,
}),
    });
    console.log("CREATE STATUS:", newUserResponse.status);



    if (!newUserResponse.ok) {
      const errorText = await newUserResponse.text();

      console.error(
        "Failed to create user in Strapi:",
        errorText
      );

      return null;
    }

    const newUserData = await newUserResponse.json();

return {
  ...newUserData,
  subscriptionTier,
};
  } catch (error) {
    console.error("Error in checkUser:", error);
    return null;
  }
};
