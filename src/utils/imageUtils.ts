export async function checkImages(images: string[]): Promise<string[]> {
    const filteredImages = await Promise.all(
      images.map(async (image) => {
        try {
          const response = await fetch(image, { method: "HEAD" });
          return response.ok ? image : null;
        } catch {
          return null; 
        }
      })
    );
  
    return filteredImages.filter(Boolean) as string[];
  }
  