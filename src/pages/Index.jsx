import React, { useState } from "react";
import { Container, Text, VStack, Button, Input, Select, Box, Grid, GridItem, IconButton, useToast, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";
import { FaPlus, FaCheck, FaTimes, FaChartBar } from "react-icons/fa";

const Index = () => {
  const [role, setRole] = useState("customer");
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({ title: "", description: "" });
  const [assignedTickets, setAssignedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const toast = useToast();

  const handleCreateTicket = () => {
    setTickets([...tickets, { ...newTicket, status: "open", id: tickets.length + 1 }]);
    setNewTicket({ title: "", description: "" });
    toast({ title: "Ticket created.", status: "success", duration: 2000, isClosable: true });
  };

  const handleAssignTicket = (ticketId) => {
    const ticket = tickets.find((t) => t.id === ticketId);
    setAssignedTickets([...assignedTickets, ticket]);
    setTickets(tickets.filter((t) => t.id !== ticketId));
    toast({ title: "Ticket assigned.", status: "info", duration: 2000, isClosable: true });
  };

  const handleResolveTicket = (ticketId) => {
    const ticket = assignedTickets.find((t) => t.id === ticketId);
    setResolvedTickets([...resolvedTickets, { ...ticket, status: "closed" }]);
    setAssignedTickets(assignedTickets.filter((t) => t.id !== ticketId));
    toast({ title: "Ticket resolved.", status: "success", duration: 2000, isClosable: true });
  };

  const renderCustomerView = () => (
    <VStack spacing={4}>
      <Text fontSize="2xl">Customer Dashboard</Text>
      <Box>
        <Input placeholder="Title" value={newTicket.title} onChange={(e) => setNewTicket({ ...newTicket, title: e.target.value })} />
        <Input placeholder="Description" value={newTicket.description} onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })} />
        <Button leftIcon={<FaPlus />} onClick={handleCreateTicket}>
          Create Ticket
        </Button>
      </Box>
      <Table variant="simple">
        <TableCaption>Tickets Created</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tickets.map((ticket) => (
            <Tr key={ticket.id}>
              <Td>{ticket.title}</Td>
              <Td>{ticket.description}</Td>
              <Td>{ticket.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );

  const renderModeratorView = () => (
    <VStack spacing={4}>
      <Text fontSize="2xl">Moderator Dashboard</Text>
      <Table variant="simple">
        <TableCaption>Open Tickets</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tickets.map((ticket) => (
            <Tr key={ticket.id}>
              <Td>{ticket.title}</Td>
              <Td>{ticket.description}</Td>
              <Td>
                <IconButton icon={<FaCheck />} onClick={() => handleAssignTicket(ticket.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );

  const renderAgentView = () => (
    <VStack spacing={4}>
      <Text fontSize="2xl">Agent Dashboard</Text>
      <Table variant="simple">
        <TableCaption>Assigned Tickets</TableCaption>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {assignedTickets.map((ticket) => (
            <Tr key={ticket.id}>
              <Td>{ticket.title}</Td>
              <Td>{ticket.description}</Td>
              <Td>
                <IconButton icon={<FaTimes />} onClick={() => handleResolveTicket(ticket.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );

  const renderManagerView = () => (
    <VStack spacing={4}>
      <Text fontSize="2xl">Manager Dashboard</Text>
      <Box>
        <IconButton icon={<FaChartBar />} />
        <Text>Open Tickets: {tickets.length}</Text>
        <Text>Closed Tickets: {resolvedTickets.length}</Text>
      </Box>
    </VStack>
  );

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="moderator">Moderator</option>
          <option value="agent">Agent</option>
          <option value="manager">Manager</option>
        </Select>
        {role === "customer" && renderCustomerView()}
        {role === "moderator" && renderModeratorView()}
        {role === "agent" && renderAgentView()}
        {role === "manager" && renderManagerView()}
      </VStack>
    </Container>
  );
};

export default Index;
