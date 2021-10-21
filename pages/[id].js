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

const unpublishedPages = {
  4: {
    title: "this is page 4 (only available in preview)",
  },
};

async function getPage(id, preview = false) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (preview) {
        resolve({ ...pages, ...unpublishedPages }[id]);
      } else {
        resolve(pages[id]);
      }
    }, 1000);
  });
}

const Page = ({ page, preview }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {preview && (
        <h3>
          Warning: you are in preview mode.{" "}
          <Link href="/api/exit-preview">Exit</Link>
        </h3>
      )}
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
  const { params, preview = false } = context;
  const page = await getPage(params.id, preview);

  if (!page) {
    return {
      notFound: true,
      revalidate: 5,
    };
  }

  return {
    props: { page, preview },
    revalidate: 5,
  };
}

export default Page;
