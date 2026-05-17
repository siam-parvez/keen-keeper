export default async function FriendDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return <div>My Post: {id}</div>;
}
