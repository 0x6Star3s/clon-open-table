import axios from "axios";
import { useState } from "react";

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<{time: string; available: boolean}[] | null>(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setData(response.data);
    } catch (err: any) {
      setLoading(false);
      setError(err.response.data.errorMessage);
    }
  };
  return { loading, data, error, fetchAvailabilities };
}


// restaurant
// http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-09-01&time=14:30:00.000Z&partySize=2