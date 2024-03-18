import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FlashcardDetailsPage() {
  const { id } = useParams();
  const all_data = useSelector((state) => state.all_data);
  const [defination, setDefination] = useState(
    all_data[id]["form_2"][0]["defination"]
  );

  useEffect(() => {}, [defination]);

  return (
    <>
      <div className="w-full h-[100vh] mb-16 px-8 bg-pink-50 flex items-center flex-col">
        <div className="w-11/12 my-4 mb-16 px-8">
          <div className="flex">
            <label className="">
              {/* <svg
                className="h-8 w-8 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <polyline points="9 14 4 9 9 4" />{" "}
                <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
              </svg> */}
              <IoReturnUpBackSharp className="w-8 h-8" />
            </label>
            <div className="mx-6 my-2">
              <p className="font-bold">{all_data[id]["form_1"].group_name}</p>
              <p className="my-4">{all_data[id]["form_1"].description}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-evenly">
            <Card className="mt-6 w-2/12">
              <CardBody>
                <ul>
                  <li>
                    <Typography className="mb-1 text-[#6f6b6b]">
                      Flashcard
                    </Typography>
                  </li>
                  <hr className="border border-black" />
                  {all_data[id]["form_2"].length > 0 ? (
                    all_data[id]["form_2"].map((value, index) => {
                      return (
                        <li key={index}>
                          <Typography
                            className="my-2 font-medium text-red-500 cursor-pointer"
                            onClick={() => {
                              setDefination(value["defination"]);
                            }}
                          >
                            {value["term_title"]}
                          </Typography>
                        </li>
                      );
                    })
                  ) : (
                    <li>
                      <Typography className="my-2 font-medium text-red-500">
                        NO Data
                      </Typography>
                    </li>
                  )}
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 w-7/12">
              <CardBody className="">
                <CardHeader
                  floated={false}
                  className="shadow-lg border border-gray-200"
                >
                  <img
                    className="w-44 mx-5"
                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                    alt="profile"
                  />
                </CardHeader>
                <Typography className="text-[#6f6b6b] mt-5">
                  {defination}
                </Typography>
              </CardBody>
            </Card>

            <div className="mt-6 w-2/12">
              <label className="flex items-center bg-white px-2 py-1 w-full rounded-md mb-2">
                <FaShare className="mr-10 h-4 w-4" />
                Share
              </label>

              <label className="flex items-center bg-white px-2 py-1 w-full rounded-md mb-2">
                <FaDownload className="mr-10 h-5 w-5" />
                Download
              </label>

              <label className="flex items-center bg-white px-2 py-1 w-full rounded-md mb-2">
                <IoMdPrint className="mr-10 h-5 w-5" />
                Print
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashcardDetailsPage;
