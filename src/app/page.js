import HomePage from "@/components/global_components/navbar/HomePage/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welecome to the Student Management System!
      </h1>
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        This is the home page of the Student Management System. Use the
        navigation links above to explore the features of the application.
      </p>
      <br /> <br />
      <HomePage />
    </div>
  );
}
