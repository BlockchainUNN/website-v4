export async function uploadImageToCloudinary(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "buildathon_submissions"); // from Cloudinary dashboard

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dk9sa8kiq/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) throw new Error("Image upload failed");

  const data = await res.json();
  return data.secure_url; // hosted image URL
}
