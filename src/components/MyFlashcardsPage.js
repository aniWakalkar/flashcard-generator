import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MyFlashcardsPage() {
  const navigate = useNavigate();
  // const all_data = useSelector((state) => state.all_data);
  const [flashCards, setFlashCards] = useState(
    JSON.parse(localStorage.getItem("flashCards"))
      ? JSON.parse(localStorage.getItem("flashCards"))
      : []
  );

  useEffect(() => {
    if (!flashCards) {
      localStorage.setItem("flashCards", JSON.stringify([]));
      setFlashCards(JSON.parse(localStorage.getItem("flashCards")));
    }
    console.log(flashCards);
  }, [flashCards]);

  return (
    <>
      <div className="w-full flex items-center flex-col">
        <div className="w-10/12 my-14 mb-16 p-8 border border-gray-300 bg-pink-50">
          <div className="flex flex-wrap items-center justify-around">
            {flashCards.length > 0 ? (
              flashCards.map((value, index) => {
                return (
                  <Card
                    className="mt-16 h-[250px] w-[250px] mx-1 text-center rounded-md"
                    key={index}
                  >
                    <img
                      src={
                        value.form_1.imagePreview
                          ? value.form_1.imagePreview
                          : `https://cdn.pixabay.com/photo/2017/07/18/23/40/group-2517459_640.png`
                      }
                      alt="title"
                      className="h-12 w-12 mx-auto mt-[-18px] bg-gray-300 rounded-xl"
                    />
                    <CardBody className="" style={{ overflow: "hidden" }}>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 font-extrabold"
                      >
                        {value.form_1.group_name.slice(0, 20) + "..."}
                      </Typography>
                      <Typography style={{ overflow: "hidden" }}>
                        {value.form_1.description.slice(0, 80) + "..."}
                      </Typography>
                      {/* <Typography className="font-bold">9 Cards</Typography> */}
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
