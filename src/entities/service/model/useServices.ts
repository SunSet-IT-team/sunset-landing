// import { useEffect, useState } from "react";

// export const useServices = () => {
//   const [data, setData] = useState<CardProps[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch("/api/services");
//         if (!res.ok) throw new Error("Ошибка при загрузке услуг");
//         const json = await res.json();
//         setData(json);
//       } catch (err: any) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   return { data, isLoading, error };
// };
