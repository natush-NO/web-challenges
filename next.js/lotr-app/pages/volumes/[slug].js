// import Link from "next/link";
// import Image from "next/image";
// import { volumes } from "../../lib/data";
// import { useRouter } from "next/router";

// export default function Movie() {
//   const router = useRouter();

//   const { slug, title, description, books } = volumes.find(
//     ({ slug }) => slug === router.query.slug
//   );

//   const currentIndex = volumes.findIndex(
//     (movie) => movie.slug === router.query.slug
//   );

//   return (
//     <>
//       <Link href={"../volumes"}>← All Volumes</Link>
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <ul>
//         {books.map((book, index) => {
//           return (
//             <li key={index}>
//               {book.ordinal}: {book.title}
//             </li>
//           );
//         })}
//       </ul>
//       <Image src={`/${slug}.png`} height={230} width={140} alt={title} />
//       {currentIndex > 0 ? (
//         <p>
//           <Link href={`/../volumes/${volumes[currentIndex - 1].slug}`}>
//             Previous Volume
//           </Link>
//         </p>
//       ) : null}
//       {currentIndex < volumes.length - 1 ? (
//         <p>
//           <Link href={`/../volumes/${volumes[currentIndex + 1].slug}`}>
//             Next Volume
//           </Link>
//         </p>
//       ) : null}
//     </>
//   );
// }
