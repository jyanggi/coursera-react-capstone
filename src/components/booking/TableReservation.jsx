import "./TableReservation.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  SimpleGrid,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import Confirmation from "./Confirmation";
function TableReservation() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submission, setSubmission] = useState({});
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      numberOfDiners: 0,
      occasion: "other",
      seatingOptions: "standard",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      specialInstructions: "",
    },

    onSubmit: async (values) => {
      setIsSuccess(false);
      setSubmission(values);
      formik.resetForm();
      setIsSuccess(true);
    },

    validationSchema: yup.object().shape({
      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required"),
      phoneNumber: yup
        .string()
        .required("Required")
        .matches(phoneRegExp, "Phone number is not valid"),
      email: yup.string().email("Invalid email format").required("Required"),
      date: yup.date().required("Required"),
      time: yup.string().required("Required"),
      numberOfDiners: yup
        .number()
        .integer()
        .required("Required")
        .positive("Must be more than 0"),
      seatingOptions: yup
        .string()
        .required("Required")
        .oneOf(["standard", "outside"], "Invalid option"),
      occasion: yup
        .string()
        .required("Required")
        .oneOf(["birthday", "other", "engagement", "anniv"], "Invalid option"),
    }),
  });

  return (
    <>
      {isSuccess ? (
        <Confirmation
          submission={submission}
          callBack={() => {
            setIsSuccess(false);
            setSubmission({});
          }}
        />
      ) : (
        <form className="reservation-form" onSubmit={formik.handleSubmit}>
          <VStack spacing={25} w="100%">
            <Heading className="reservation-form-heading">
              Reservation form
            </Heading>
            {isSuccess && <p>Reservation Successful</p>}
            <SimpleGrid minChildWidth="250px" columnGap={50} rowGap={6} w="80%">
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">First name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <FormErrorMessage className="error">
                    {formik.errors.firstName}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.lastName && formik.errors.lastName}
              >
                <FormLabel htmlFor="lastName">Last name</FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <FormErrorMessage className="error">
                    {formik.errors.lastName}
                  </FormErrorMessage>
                )}
              </FormControl>
            </SimpleGrid>
            <SimpleGrid minChildWidth="250px" columnGap={50} rowGap={6} w="80%">
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="phoneNumber">Phone number</FormLabel>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone number"
                  type="tel"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <FormErrorMessage className="error">
                    {formik.errors.phoneNumber}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage className="error">
                    {formik.errors.email}
                  </FormErrorMessage>
                )}
              </FormControl>
            </SimpleGrid>
            <SimpleGrid minChildWidth="250px" columnGap={50} rowGap={6} w="80%">
              <FormControl
                isInvalid={formik.touched.date && formik.errors.date}
              >
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  placeholder="Enter Date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                />
                {formik.touched.date && formik.errors.date && (
                  <FormErrorMessage className="error">
                    {formik.errors.date}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.time && formik.errors.time}
              >
                <FormLabel htmlFor="time">Time</FormLabel>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                />
                {formik.touched.time && formik.errors.time && (
                  <FormErrorMessage className="error">
                    {formik.errors.time}
                  </FormErrorMessage>
                )}
              </FormControl>
            </SimpleGrid>
            <SimpleGrid minChildWidth="250px" columnGap={50} rowGap={6} w="80%">
              <FormControl>
                <FormLabel htmlFor="type">Occasion</FormLabel>
                <Select
                  id="occasion"
                  name="occasion"
                  value={formik.values.occasion}
                  onChange={formik.handleChange}
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniv">Anniversary</option>
                  <option value="engagement">Engagement</option>
                  <option value="other">Other</option>
                </Select>
                {formik.touched.occasion && formik.errors.occasion && (
                  <FormErrorMessage className="error">
                    {formik.errors.occasion}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.numberOfDiners && formik.errors.numberOfDiners
                }
              >
                <FormLabel htmlFor="time">No. of Diners</FormLabel>
                <Input
                  id="numberOfDiners"
                  name="numberOfDiners"
                  type="number"
                  value={formik.values.numberOfDiners}
                  onChange={formik.handleChange}
                />
                {formik.touched.numberOfDiners &&
                  formik.errors.numberOfDiners && (
                    <FormErrorMessage className="error">
                      {formik.errors.numberOfDiners}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={1} columnGap={50} rowGap={6} w="80%">
              <FormControl>
                <FormLabel htmlFor="seatingOptions">Seating Options</FormLabel>
                <Select
                  id="seatingOptions"
                  name="seatingOptions"
                  value={formik.values.seatingOptions}
                  onChange={formik.handleChange}
                >
                  <option value="standard">Standard</option>
                  <option value="outside">Outside</option>
                </Select>
                {formik.touched.seatingOptions &&
                  formik.errors.seatingOptions && (
                    <FormErrorMessage className="error">
                      {formik.errors.seatingOptions}
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.specialInstructions &&
                  formik.errors.specialInstructions
                }
              >
                <FormLabel htmlFor="specialInstructions">
                  Special instructions
                </FormLabel>
                <Textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  height={250}
                  maxHeight={250}
                  width="100%"
                  maxWidth="100%"
                  value={formik.values.specialInstructions}
                  onChange={formik.handleChange}
                />
                {formik.touched.specialInstructions &&
                  formik.errors.specialInstructions && (
                    <FormErrorMessage>
                      {formik.errors.specialInstructions}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </SimpleGrid>
            <Button
              type="submit"
              width="full"
              className="submit"
              isLoading={formik.isSubmitting}
            >
              Submit
            </Button>
          </VStack>
        </form>
      )}
    </>
  );
}

export default TableReservation;
