import Button from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="pb-15">
      <div className="flex gap-5 justify-center my-8">
        <Button
          className="bg-indigo-500 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-800"
          variant="default"
        >
          <Link href="/register"> Register </Link>
        </Button>
        <Button variant="secondary">
          <Link href="/student/student-login"> Student Login </Link>
        </Button>
      </div>
      <div className={`container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 dark:text-white gap-5 px-5`}>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">শিক্ষার্থী তথ্য</h2>
          <p className="dark:text-gray-200">
            {" "}
            আপনি আপনার সকল তথ্য দেখতে পারবেন{" "}
          </p>
        </div>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">এডিট অ্যাপ্লিকেশন</h2>
          <p className="dark:text-gray-200">
            {" "}
            আপনার তথ্য সংশোধন সংশোধন করতে পারবেন{" "}
          </p>
        </div>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">সাবমিট অ্যাটেনডেন্স</h2>
          <p className="dark:text-gray-200">
            {" "}
            প্রতিদিনের অ্যাটেনডেন্স সাবমিট করতে পারবেন{" "}
          </p>
        </div>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">শিক্ষার্থী রেজিস্ট্রেশন</h2>
          <p className="dark:text-gray-200">
            <Link href="#">
              অ্যাটেনডেন্স সাবমিট করার পূর্বে রেজিস্ট্রেশন করুন এখানে{" "}
            </Link>
          </p>
        </div>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">গুগল ড্রাইভ লিংক</h2>
          <p className="dark:text-gray-200">
            <Link href="https://drive.google.com/drive/folders/1_u13dpc7CJsTDYb9bB_h-7TnoipZLVxT?usp=drive_link">
              জব, ‍সেশনাল স্যালুশন এখানে
            </Link>
          </p>
        </div>
        <div className=" bg-white rounded-xl shadow-md dark:bg-gray-800 p-5 space-y-3">
          <h2 className="text-2xl font-bold ">পুরাতন ওয়েবসাইট </h2>
          <p className="dark:text-gray-200">
            <Link href="cst-kpi2324.free.nf">
              পুরাতন ওয়েবসাইটে প্রবেশ করতে এখানে ক্লিক করুন{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
