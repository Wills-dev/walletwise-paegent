import axios from "axios";

export const getTicket = async ({
  fullName,
  email,
  phoneNumber,
  dateOfBirth,
  state,
  occupation,
  height,
  languages,
  address,
  sponsor,
  certificate,
  participatedBefore,
  nameOfContest,
  wonBefore,
  titleWon,
}: {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  state: string;
  occupation: string;
  height: string;
  languages: string;
  address: string;
  sponsor: string;
  certificate: string;
  participatedBefore: string;
  nameOfContest: string;
  wonBefore: string;
  titleWon: string;
}) => {
  try {
    // const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const payload = {
      fullName,
      email,
      phoneNumber,
      dateOfBirth,
      state,
      occupation,
      height,
      languages,
      address,
      sponsor,
      certificate,
      participatedBefore,
      nameOfContest,
      wonBefore,
      titleWon,
    };
    const url = `https://walletwise.ng/api/v1/events/book`;
    const { data } = await axios.post(url, payload);
    return data;
  } catch (error) {
    throw error;
  }
};
