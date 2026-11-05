import Link from "next/link";

export default function NotFound() {
  return (
    <div className="status">
      <h1>404: Page not found</h1>
      <p>That product doesn&apos;t exist.</p>
      <Link href="/">Back to the catalog</Link>
    </div>
  );
}