import SearchList from "./components/ui/SearchList";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center mt-4 font-bold">Cat Browser</h1>
        <div className="px-4">
          <SearchList />
        </div>        
      </div>
    </main>
  );
}
