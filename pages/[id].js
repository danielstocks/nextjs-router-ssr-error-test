import Link from "next/link";
import { useRouter } from "next/router";

const pages = {
  1: {
    title: "this is page 1",
  },
  2: {
    title: "this is page 2",
  },
  3: {
    title: "this is page 3",
  },
};

async function getPage(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(pages[id]);
    }, 1000)
  );
}

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
  const page = await getPage(context.params.id);

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
