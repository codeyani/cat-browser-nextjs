export type TCatDetailsProps = {
  params: {
    breed: string;
  };
}

type TBreed = {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
}

export type TDetails = {
  breeds: TBreed[];
  id: string;
  url: string;
}