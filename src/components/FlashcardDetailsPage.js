import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdPrint } from "react-icons/io";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FlashcardDetailsPage() {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const { id } = useParams();
  // const all_data = useSelector((state) => state.all_data);
  const flashCards = JSON.parse(localStorage.getItem("flashCards"));
  const [defination, setDefination] = useState(
    flashCards[id]["form_2"][0]["defination"]
  );

  useEffect(() => {}, [defination]);

  return (
    <>
      <div className="w-full mb-16 px-14 flex items-center flex-col">
        <div
          className="w-11/12 my-14 px-16 py-8 border border-gray-300 bg-pink-50"
          style={{ width: "85%" }}
        >
          <div className="mx-6 my-2">
            <p className="font-bold">
              {flashCards[id]["form_1"].group_name.toUpperCase()}
            </p>
            <p className="my-4">{flashCards[id]["form_1"].description}</p>
          </div>

          <div className="flex flex-wrap items-start justify-evenly">
            <Card className="mt-4 w-2/12">
              <CardBody>
                <ul>
                  <li>
                    <Typography className="mb-1 text-[#6f6b6b]">
                      Flashcard
                    </Typography>
                  </li>
                  <hr className="border border-black" />
                  {flashCards[id]["form_2"].length > 0 ? (
                    flashCards[id]["form_2"].map((value, index) => {
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

            <Card className="mt-4 w-7/12">
              <CardBody className="px-4 py-2">
                {flashCards[id]["form_1"].imagePreview && (
                  <CardHeader
                    floated={false}
                    className="shadow-lg border border-gray-200"
                  >
                    <img
                      className="w-52 mx-5 h-36 p-2"
                      src={flashCards[id]["form_1"].imagePreview}
                      alt="profile"
                    />
                  </CardHeader>
                )}
                <Typography className="text-[#6f6b6b] mt-5">
                  {defination}
                </Typography>
              </CardBody>
            </Card>

            <div className="mt-4 w-2/12">
              <label
                className="flex items-center bg-white px-2 py-1 w-full rounded-md mb-2"
                onClick={handleOpen}
              >
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

              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Share</DialogHeader>
                <DialogBody>
                  <span>Link</span>
                  <span>{window.location.href}</span>
                  <span>
                    <Button
                      className={copied ? `bg-gray-500 my-5` : `my-5`}
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        setCopied(true);
                      }}
                    >
                      {!copied ? "Copy link" : "Copied!"}
                    </Button>
                  </span>
                </DialogBody>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlashcardDetailsPage;
