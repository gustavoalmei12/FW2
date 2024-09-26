import { useRouter } from "next/router";

export default function pages() {
    const router = useRouter()
    return <p>Post: {router.query.id}</p>
}