import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdCloudUpload } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handle_store } from "../store/actions/action";

function CreateFlashcardPage() {
  const [form_1, setForm_1] = useState({
    group_name: "",
    description: "",
    imagePreview: null,
  });
  const [required_field, setRequired_Field] = useState(false);
  const [form_2, setForm_2] = useState([{ term_title: "", defination: "" }]);
  const dispatch = useDispatch();
  const all_data = useSelector((state) => state.all_data);

  const handle_delete = (index) => {
    let new_Data = form_2.filter((value, i) => {
      return i !== index;
    });

    setForm_2(new_Data);
  };

  const handle_edit = (index) => {
    const inputField = document.getElementById(`term_title-${index}`);
    if (inputField) {
      inputField.focus();
    }
  };

  const handle_form_1 = (e) => {
    setForm_1((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handle_add_more = () => {
    setForm_2((prevInputs) => [
      ...prevInputs,
      { term_title: "", defination: "" },
    ]);
    // setForm_2((prevInputs) =>
    //   prevInputs.term_title === ""
    //     ? setRequired_Field(true)
    //     : [...prevInputs, { term_title: "", defination: "" }]
    // );
  };

  const handle_form_2 = (index, fieldName, value) => {
    setForm_2((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index][fieldName] = value;
      return newInputs;
    });
  };

  const handle_all_data = () => {
    if (form_1.group_name !== "" && form_1.description !== "") {
      dispatch(handle_store({ form_1: form_1, form_2: form_2 }));
    } else {
      setRequired_Field(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm_1((prevState) => ({
          ...prevState,
          imagePreview: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setRequired_Field(false);
    }, 3000);
  }, [all_data, required_field]);

  return (
    <>
      <div className="w-full bg-pink-50 flex items-center flex-col">
        <div className="text-red-500 flex items-center justify-end w-full my-2">
          <p
            className={
              required_field
                ? "display p-2 border border-red-400 w-fit"
                : "invisible"
            }
          >
            Please Fill in All the required fields.
          </p>
        </div>
        <div className="w-9/12 my-6 mb-16 px-8">
          <Card className="mt-6">
            <CardBody>
              <div className="flex items-center">
                <div className="w-72">
                  <Input
                    label="Create Group"
                    name="group_name"
                    value={form_1.group_name}
                    onChange={handle_form_1}
                    required
                  />
                </div>
                <div className="w-60 mx-8">
                  <label className="p-2 w-40 flex items-center justify-between bg-white text-blue border border-blue-gray-200 rounded-md hover:bg-gray-200">
                    <MdCloudUpload className="h-6 w-6" />
                    <span className="leading-normal">Upload Image</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4/6 mt-6">
                  <Textarea
                    label="Add Description"
                    name="description"
                    value={form_1.description}
                    onChange={handle_form_1}
                    required
                  />
                </div>
                {form_1.imagePreview && (
                  <div className="mt-4">
                    <img
                      src={form_1.imagePreview}
                      alt="Preview"
                      className="max-w-full h-32 mx-10"
                    />
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6">
            <CardBody>
              {form_2.length > 0 &&
                form_2.map((value, index) => {
                  return (
                    <div
                      className="flex items-center justify-around my-2"
                      key={index}
                    >
                      <div className="text-base font-bold bg-red-500 rounded-3xl w-8 text-white text-center p-1">
                        {index + 1}
                      </div>
                      <div className="w-60">
                        <Input
                          id={`term_title-${index}`}
                          name={`term_title-${index}`}
                          label="Enter Terms*"
                          value={value.term_title}
                          onChange={(e) => {
                            handle_form_2(index, "term_title", e.target.value);
                          }}
                        />
                      </div>
                      <div className="w-72">
                        <Input
                          label="Enter Definition*"
                          id={`definition-${index}`}
                          name={`definition-${index}`}
                          value={value.defination}
                          onChange={(e) => {
                            handle_form_2(index, "defination", e.target.value);
                          }}
                        />
                      </div>

                      {/* Terms Image uploader */}
                      <label className="p-2 w-40 flex items-center justify-between bg-white text-blue border border-blue-gray-200 rounded-md hover:bg-gray-200">
                        <MdCloudUpload className="h-6 w-6" />
                        <span className="leading-normal">Upload Image</span>
                        <input type="file" className="hidden" />
                      </label>

                      {/* Terms Editor */}
                      <button
                        className="hover:text-blue-900 hover:bg-blue-gray-100 p-2 rounded-md shadow-xl border border-gray-400"
                        onClick={() => {
                          handle_edit(index);
                        }}
                      >
                        <FiEdit />
                      </button>

                      {/* Terms delete */}
                      <button
                        className="hover:text-red-700 hover:bg-blue-gray-100 p-2 rounded-md shadow-xl border border-gray-400"
                        onClick={() => {
                          handle_delete(index);
                        }}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  );
                })}

              <Button
                className="rounded-md mt-6 font-extrabold border border-gray-400"
                variant="text"
                onClick={() => {
                  handle_add_more();
                }}
              >
                + Add More
              </Button>
            </CardBody>
          </Card>
          <Button
            className="rounded-md mt-6 w-44 text-white font-extrabold border border-gray-400 bg-red-600 hover:border-red-600"
            variant="text"
            onClick={handle_all_data}
          >
            Create
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateFlashcardPage;
