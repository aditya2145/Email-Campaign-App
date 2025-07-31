export const createCampaign = async({ name, description, users, steps }) => {
    const res = await fetch(`https://email-campaign-app-heh4.onrender.com/api/campaign/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, users, description, schema: steps }),
    });

    const data = await res.json();
    if(!res.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
};