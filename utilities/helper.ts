import { catValue } from "../components/ui/types";

// Function to handle search based on breed and page
export const searchHandler = async (value: string, result: catValue[], page: number) => {
  try {
    const response = await fetch(`${process.env.CAT_API}/v1/images/search?page=${page}&limit=10&breed_id=${value}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const newResult = await response.json();

    // Check if newResult items are not already in the result state
    const uniqueNewResult = newResult.filter((newItem: catValue) => (
      !result.some((existingItem) => existingItem.id === newItem.id)
    ));

    return uniqueNewResult;
  } catch (error) {
    console.error('Error in searchHandler:', error);
    throw error; // Rethrow the error to handle it at the higher level if needed
  }
};

export const getBreedLists = async () => {
  try {
    const response = await fetch(`${process.env.CAT_API}/v1/breeds`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error in getBreedLists:', error);
    throw error; // Rethrow the error to handle it at the higher level if needed
  }
};

export const getBreedDetails = async (breed: string) => {
  try {
    const response = await fetch(`${process.env.CAT_API}/v1/images/${breed}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error in getBreedDetails:', error);
    throw error; // Rethrow the error to handle it at the higher level if needed
  }
}