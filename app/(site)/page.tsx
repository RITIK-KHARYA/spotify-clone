import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import getSongs from "@/actions/getSongs";
import PageContent from "./component/PageContent";

export const revalidate = 0;
export default async function Home() {
  const songs = await getSongs();
  return (
    <div
      className="
    bg-neutral-900
    rounded-lg
    h-full w-full
    overflow-hidden
    overflow-y-auto"
    >
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
          <div
            className="grid
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 ml-0 mt-2"
          >
            <ListItem
              image="/images/liked-songs-300.png"
              name="Liked Songs"
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest Songs </h1>
        </div>
        <div>List of songs!</div>
        <PageContent songs={songs} />
      </div>
    </div>
  );
}
