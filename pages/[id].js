import Link from "next/link";
import { useRouter } from "next/router";

const pages = {
  1: {
    title: "this is page 1",
  },
  2: {
    title: "this is page 2",
  },
};

const Page = ({ page }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{page.title}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const page = pages[context.params.id];

  console.log(page);

  if (!page) {
    return {
      notFound: true,
      revalidate: 5,
    };
  }

  return {
    props: { page },
    revalidate: 5,
  };
}

export default Page;
