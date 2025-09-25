"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto max-w-lg bg-slate-200 my-16 p-8 rounded-lg flex flex-col gap-2">
      <h1 className="font-bold text-2xl">Generate Your Urls</h1>
      <div className="flex flex-col gap-2">
        <input
          className="px-4 py-2 border focus:outline-slate-600 rounded-md"
          value={url}
          type="text"
          placeholder="Enter your URLs"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <input
          className="px-4 py-2 border focus:outline-slate-600 rounded-md"
          value={shorturl}
          type="text"
          placeholder="Enter your preferred short URLs text"
          onChange={(e) => {
            setShorturl(e.target.value);
          }}
        />
        <button
          onClick={generate}
          className="bg-slate-500 rounded-lg shadow-lg p-3 py-1 font-bold"
        >
          Generate
        </button>
      </div>
      {generated && (
        <>
          {" "}
          <span className="font-bold text-lg">Your Link </span>
          <code>
            <Link target="_blank" href={generated}>
              {generated}
            </Link>
          </code>
        </>
      )}
    </div>
  );
};

export default Shorten;
