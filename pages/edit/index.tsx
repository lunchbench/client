import { useEffect } from "react";
import { useRouter } from "next/router";

// Current URL is '/'
function EditIndex() {
  const router = useRouter();

  useEffect(() => {
    // Always do navigations after the first render
    router.push("/", undefined, { shallow: true });
  }, []);

  useEffect(() => {}, [router.query]);
  return null;
}

export default EditIndex;