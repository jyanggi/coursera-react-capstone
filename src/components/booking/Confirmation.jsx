import {
  Button,
  Card,
  Heading,
  CardHeader,
  Text,
  CardBody,
  CardFooter,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import "./Confirmation.scss";
function Confirmation(props) {
  const { submission, callBack } = props;
  return (
    <Card className="confirmation-card">
      <CardHeader>
        <Heading size="md">Reservation Successful</Heading>
      </CardHeader>
      <CardBody>
        <List spacing={20} className="confirmation-details">
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Name : {`${submission?.firstName} ${submission?.lastName}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Phone : {`${submission?.phoneNumber}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Email : {`${submission?.email}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Date and Time : {`${submission?.date}, ${submission?.time}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Number of diners : {`${submission?.numberOfDiners}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Occasion : {`${submission?.occasion}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Seating Options : {`${submission?.seatingOptions}`}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Special Instructions : {`${submission?.specialInstructions}`}
          </ListItem>
        </List>
        <Text>
          Please provide your name and contact number at the reception upon
          arrival
        </Text>
      </CardBody>
      <CardFooter>
        <Button onClick={() => callBack && callBack()}>Close</Button>
      </CardFooter>
    </Card>
  );
}

export default Confirmation;
