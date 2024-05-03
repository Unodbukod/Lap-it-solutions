"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Add from "./button/Add";

import Update from "./button/Update";
import { toast } from "sonner";
import AddOH from "./button/AddOH";
import UpdateOH from "./button/UpdateOH";
import Addloc from "./button/Addloc";
import Updateloc from "./button/Updateloc";
import Updategcash from "./button/Updategcash";
import Addgcash from "./button/Addgcash";
import Addemail from "./button/Addemail";
import Updateemail from "./button/Updateemail";


interface AboutcontactNumber {
  id: number;
  simcardandnumber: String;
}
interface AboutEmail {
  id: number;
  content: String;
}
interface AboutLocation {
  id: number;
  content: String;
}
interface AboutOpeninghours {
  id: number;
  content: String;
}
interface AboutGcash {
  id: number;
  content: String;
}

const Thirdsection = () => {
  const [aboutContactNumber, setContactNumber] = useState<AboutcontactNumber[]>(
    []
  );
  const [aboutEmail, setEmail] = useState<AboutEmail[]>(
    []
  );
  const [aboutLocation, setLocation] = useState<AboutLocation[]>(
    []
  );
  const [aboutGcash, setGcash] = useState<AboutOpeninghours[]>(
    []
  );
  const [aboutOh, setOh] = useState<AboutGcash[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/contactnumber"
        );
        const data = await response.json();
        setContactNumber(data.aboutContacts);
      } catch (error) {
        console.error("Error fetching Contact Table content:", error);
      }
    };

    fetchData();

    const fetchDataEmail = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/email"
        );
        const data = await response.json();
        setEmail(data.aboutEmail);
      } catch (error) {
        console.error("Error fetching Contact Table content:", error);
      }
    };

    fetchDataEmail();
    
    const fetchDataLocation = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/location"
        );
        const data = await response.json();
        setLocation(data.aboutLocation);
      } catch (error) {
        console.error("Error fetching Contact Table content:", error);
      }
    };

    fetchDataLocation();

    const fetchDataGcash = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/gcash"
        );
        const data = await response.json();
        setGcash(data.aboutGcash);
      } catch (error) {
        console.error("Error fetching Contact Table content:", error);
      }
    };

    fetchDataGcash();

    const fetchDataOpeninghours = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/openinghours"
        );
        const data = await response.json();
        setOh(data.aboutOh);
      } catch (error) {
        console.error("Error fetching Contact Table content:", error);
      }
    };

    fetchDataOpeninghours();


  }, []);

  


  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent/contactnumber?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        
        setContactNumber((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("successfully deleted contact number")
      } else {
        toast.error("failed")
      }
    } catch (error) {
      console.error("Error deleting contact table content:", error);
    }
  };

  const handleDeleteEmail = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent/email?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        
        setEmail((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("successfully deleted email")
      } else {
        toast.error("failed")
      }
    } catch (error) {
      console.error("Error deleting contact table content:", error);
    }
  };

  const handleDeleteLocation = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent/location?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        setEmail((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("successfully deleted location")
      } else {
        toast.error("failed")
      }
    } catch (error) {
      console.error("Error deleting contact table content:", error);
    }
  };

  const handleDeleteGcash = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent/gcash?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        setEmail((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("successfully deleted gcash")
      } else {
        toast.error("failed")
      }
    } catch (error) {
      console.error("Error deleting contact table content:", error);
    }
  };

  const handleDeleteOh = async (id: number) => {
    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent/openinghours?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Remove the deleted item from the state
        setEmail((prevState) =>
          prevState.filter((item) => item.id !== id)
        );
        toast.success("successfully deleted gcash")
      } else {
        toast.error("failed")
      }
    } catch (error) {
      console.error("Error deleting contact table content:", error);
    }
  };




  return (
    <div>
      <div className="flex">
        <div className="w-screen max-h-none mb-32 relative">
          <div className="flex flex-col">
            <div className="text-center">
              <h1 className="text-[48px] font-extrabold mx-28">VISIT US</h1>
              <p className="text-[16px] text-gray-500">
                LAP I.T. Solutions Inc. will help you move to the future.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2 max-h-none relative">
              <div className="flex items-center justify-center mtw-10 mb-6">
                <Image
                  src="/about/image2.svg"
                  width={600}
                  height={600}
                  alt=""
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="flex items-center justify-center my-6">
                {/* <Map/> */}
              </div>
            </div>
            <div className="w-1/2 max-h-none relative ml-10 ">
              {/* Form or content */}
              <div className="mt-10">
                <div className=" flex-col items-start">
                  <div className="">
                    <h1 className="font-extrabold text-[30px]">OUR LOCATION</h1>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell className="text-center">
                            <Addloc/>
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aboutLocation.map(
                          ({ id, content}) => (
                            <TableRow key={id}>
                              <TableCell className="text-center">
                              {content}
                              </TableCell>
                              <TableCell className="items-center flex justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    className="bg-red-500"
                                    onClick={() => handleDeleteLocation(id)}
                                  >
                                    DELETE
                                  </Button>
                                  <Updateloc id={id} />
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[30px]">
                      OPENING HOURS
                    </h1>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell className="text-center">
                            <AddOH/>
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aboutOh.map(
                          ({ id, content}) => (
                            <TableRow key={id}>
                              <TableCell className="text-center">
                              {content}
                              </TableCell>
                              <TableCell className="items-center flex justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    className="bg-red-500"
                                    onClick={() => handleDeleteOh(id)}
                                  >
                                    DELETE
                                  </Button>
                                  <UpdateOH id={id} />
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[30px]">
                      CONTACT NUMBER
                    </h1>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell className="text-center">
                            <Add/>
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aboutContactNumber.map(
                          ({ id, simcardandnumber}) => (
                            <TableRow key={id}>
                              <TableCell className="text-center">
                              {simcardandnumber}
                              </TableCell>
                              <TableCell className="items-center flex justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    className="bg-red-500"
                                    onClick={() => handleDelete(id)}
                                  >
                                    DELETE
                                  </Button>
                                  <Update id={id} />
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[30px]">GCASH</h1>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell className="text-center">
                            <Addgcash/>
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aboutGcash.map(
                          ({ id, content}) => (
                            <TableRow key={id}>
                              <TableCell className="text-center">
                              {content}
                              </TableCell>
                              <TableCell className="items-center flex justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    className="bg-red-500"
                                    onClick={() => handleDeleteGcash(id)}
                                  >
                                    DELETE
                                  </Button>
                                  <Updategcash id={id} />
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[30px]">EMAIL</h1>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableCell className="text-center">
                            <Addemail/>
                          </TableCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {aboutEmail.map(
                          ({ id, content}) => (
                            <TableRow key={id}>
                              <TableCell className="text-center">
                              {content}
                              </TableCell>
                              <TableCell className="items-center flex justify-center gap-2">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    className="bg-red-500"
                                    onClick={() => handleDeleteEmail(id)}
                                  >
                                    DELETE
                                  </Button>
                                  <Updateemail id={id} />
                                </div>
                              </TableCell>
                            </TableRow>
                          )
                        )}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[18px] text-blue-500">
                      Visit our FB page for more details
                    </h1>
                    <h1 className="font-bold text-gray-500 text-[16px] mt-1">
                      or visit our Tiktok @lapsales
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
