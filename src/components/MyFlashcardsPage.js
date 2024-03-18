import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyFlashcardsPage() {
  const navigate = useNavigate();
  const all_data = useSelector((state) => state.all_data);

  return (
    <>
      <div className="w-full h-[100vh] bg-pink-50 flex items-center flex-col">
        <div className="w-10/12 my-8 mb-16 px-8">
          <div className="flex flex-wrap items-center justify-around">
            {all_data.length > 0 ? (
              all_data.map((value, index) => {
                return (
                  <Card
                    className="mt-16 w-[250px] mx-1 text-center rounded-md"
                    key={index}
                  >
                    <CgProfile className="h-12 w-12 mx-auto mt-[-18px] bg-gray-300 rounded-xl" />
                    <CardBody>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 font-extrabold"
                      >
                        {value.form_1.group_name}
                      </Typography>
                      <Typography>
                        {value.form_1.description.slice(
                          0,
                          value.form_1.description.indexOf(".")
                            ? value.form_1.description.indexOf(".")
                            : 60
                        ) + "..."}
                      </Typography>
                      <Typography className="font-bold">9 Cards</Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                      <Button
                        className="bg-white text-red-500 border-2 border-red-500"
                        onClick={() => {
                          navigate(
                            `/flashcard-generator/FlashcardDetailsPage/${index}`
                          );
                        }}
                      >
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <Card
                onClick={() => {
                  navigate(`/flashcard-generator/`);
                }}
              >
                <CardBody className="font-bold">Create Your Flashcard</CardBody>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFlashcardsPage;
