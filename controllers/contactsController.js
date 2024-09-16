let contacts = [
    {
      "id": 1,
      "firstname": "John",
      "lastname": "Doe",
      "phonenumber": "+1234567890",
      "email": "john.doe@example.com",
      "address": "123 Elm Street, Springfield",
      "relationship": "brother"
    },
    {
    "id": 2,
      "firstname": "Jane",
      "lastname": "Smith",
      "phonenumber": "+0987654321",
      "email": "jane.smith@example.com",
      "address": "456 Oak Avenue, Greenville",
      "relationship": "sister"
    },
    {
      "id": 3,
      "firstname": "Michael",
      "lastname": "Johnson",
      "phonenumber": "+1230987456",
      "email": "michael.johnson@example.com",
      "address": "789 Maple Lane, Fairview",
      "relationship": "friend"
    },
    {
        "id": 4,
      "firstname": "Emily",
      "lastname": "Williams",
      "phonenumber": "+1234561234",
      "email": "emily.williams@example.com",
      "address": "101 Pine Road, Rivertown",
      "relationship": "partner"
    },
    {
        "id": 5,
      "firstname": "David",
      "lastname": "Brown",
      "phonenumber": "+9876543210",
      "email": "david.brown@example.com",
      "address": "102 Cedar Street, Mountainview",
      "relationship": "father"
    },
    {
        "id": 6,
      "firstname": "Sarah",
      "lastname": "Taylor",
      "phonenumber": "+5678901234",
      "email": "sarah.taylor@example.com",
      "address": "103 Birch Avenue, Hillcrest",
      "relationship": "mother"
    },
    {
        "id": 7,
      "firstname": "Daniel",
      "lastname": "Lee",
      "phonenumber": "+7654321890",
      "email": "daniel.lee@example.com",
      "address": "104 Redwood Blvd, Seaview",
      "relationship": "brother"
    },
    {
        "id": 8,
      "firstname": "Sophia",
      "lastname": "Clark",
      "phonenumber": "+6543210987",
      "email": "sophia.clark@example.com",
      "address": "105 Poplar Drive, Lakeside",
      "relationship": "sister"
    },
    {
        "id": 9,
      "firstname": "James",
      "lastname": "Miller",
      "phonenumber": "+5432109876",
      "email": "james.miller@example.com",
      "address": "106 Fir Court, Greenwood",
      "relationship": "uncle"
    },
    {
        "id": 10,
      "firstname": "Olivia",
      "lastname": "Davis",
      "phonenumber": "+4321098765",
      "email": "olivia.davis@example.com",
      "address": "107 Cedar Ridge, Brookville",
      "relationship": "aunt"
    },
    {
        "id": 11,
      "firstname": "Ethan",
      "lastname": "Garcia",
      "phonenumber": "+3210987654",
      "email": "ethan.garcia@example.com",
      "address": "108 Spruce Lane, Meadowbrook",
      "relationship": "friend"
    },
    {
        "id": 12,
      "firstname": "Ava",
      "lastname": "Martinez",
      "phonenumber": "+2109876543",
      "email": "ava.martinez@example.com",
      "address": "109 Cherry Street, Woodfield",
      "relationship": "cousin"
    },
    {
        "id": 13,
      "firstname": "Noah",
      "lastname": "Robinson",
      "phonenumber": "+1098765432",
      "email": "noah.robinson@example.com",
      "address": "110 Dogwood Terrace, Riverbend",
      "relationship": "friend"
    },
    {
        "id": 14,
      "firstname": "Mia",
      "lastname": "Walker",
      "phonenumber": "+9876512345",
      "email": "mia.walker@example.com",
      "address": "111 Willow Drive, Highland",
      "relationship": "girlfriend"
    },
    {
        "id": 15,
      "firstname": "Lucas",
      "lastname": "Young",
      "phonenumber": "+8765432109",
      "email": "lucas.young@example.com",
      "address": "112 Aspen Road, Valleyview",
      "relationship": "boyfriend"
    },
    {
        "id": 16,
      "firstname": "Isabella",
      "lastname": "King",
      "phonenumber": "+7654321098",
      "email": "isabella.king@example.com",
      "address": "113 Juniper Street, Ridgewood",
      "relationship": "friend"
    },
    {
        "id": 17,
      "firstname": "Elijah",
      "lastname": "Wright",
      "phonenumber": "+6543219876",
      "email": "elijah.wright@example.com",
      "address": "114 Magnolia Lane, Clearfield",
      "relationship": "brother"
    },
    {
        "id": 18,
      "firstname": "Amelia",
      "lastname": "Lopez",
      "phonenumber": "+5432198765",
      "email": "amelia.lopez@example.com",
      "address": "115 Dogwood Trail, Maplewood",
      "relationship": "sister"
    },
    {
        "id": 19,
      "firstname": "Alexander",
      "lastname": "Hill",
      "phonenumber": "+4321987654",
      "email": "alexander.hill@example.com",
      "address": "116 Elmwood Drive, Cedarhurst",
      "relationship": "father"
    },
    {
        "id": 20,
      "firstname": "Charlotte",
      "lastname": "Scott",
      "phonenumber": "+3219876543",
      "email": "charlotte.scott@example.com",
      "address": "117 Sycamore Avenue, Oakridge",
      "relationship": "mother"
    },
    {
        "id": 21,
      "firstname": "William",
      "lastname": "Green",
      "phonenumber": "+2109876432",
      "email": "william.green@example.com",
      "address": "118 Holly Drive, Forestview",
      "relationship": "uncle"
    },
    {
        "id": 22,
      "firstname": "Abigail",
      "lastname": "Adams",
      "phonenumber": "+1098765432",
      "email": "abigail.adams@example.com",
      "address": "119 Maplewood Street, Riverdale",
      "relationship": "aunt"
    },
    {
        "id": 23,
      "firstname": "Benjamin",
      "lastname": "Baker",
      "phonenumber": "+1239876543",
      "email": "benjamin.baker@example.com",
      "address": "120 Cedar Heights, Bayview",
      "relationship": "friend"
    },
    {
        "id": 24,
      "firstname": "Lily",
      "lastname": "Gonzalez",
      "phonenumber": "+2348765432",
      "email": "lily.gonzalez@example.com",
      "address": "121 Oakridge Road, Silverwood",
      "relationship": "friend"
    },
    {
        "id": 25,
      "firstname": "Henry",
      "lastname": "Nelson",
      "phonenumber": "+3459876543",
      "email": "henry.nelson@example.com",
      "address": "122 Poplar Drive, Eagleton",
      "relationship": "cousin"
    },
    {
        "id": 26,
      "firstname": "Grace",
      "lastname": "Carter",
      "phonenumber": "+4569876543",
      "email": "grace.carter@example.com",
      "address": "123 Maple Lane, Woodridge",
      "relationship": "sister"
    },
    {
        "id": 27,
      "firstname": "Owen",
      "lastname": "Mitchell",
      "phonenumber": "+5678765432",
      "email": "owen.mitchell@example.com",
      "address": "124 Cedar Circle, Willowbrook",
      "relationship": "brother"
    },
    {
        "id": 28,
      "firstname": "Avery",
      "lastname": "Perez",
      "phonenumber": "+6787654321",
      "email": "avery.perez@example.com",
      "address": "125 Oakwood Drive, Glenwood",
      "relationship": "friend"
    },
    {
        "id": 29,
      "firstname": "Samuel",
      "lastname": "Turner",
      "phonenumber": "+7896543210",
      "email": "samuel.turner@example.com",
      "address": "126 Elm Street, Birchwood",
      "relationship": "boyfriend"
    },
    {
        "id": 30,
      "firstname": "Ella",
      "lastname": "Ramirez",
      "phonenumber": "+8905432109",
      "email": "ella.ramirez@example.com",
      "address": "127 Maple Grove, Pinehurst",
      "relationship": "girlfriend"
    },
    {
        "id": 31,
      "firstname": "Jack",
      "lastname": "Phillips",
      "phonenumber": "+9014321098",
      "email": "jack.phillips@example.com",
      "address": "128 Cedar Ridge, Highland Park",
      "relationship": "father"
    },
    {
        "id": 32,
      "firstname": "Sofia",
      "lastname": "Campbell",
      "phonenumber": "+0123210987",
      "email": "sofia.campbell@example.com",
      "address": "129 Oak Lane, Parkview",
      "relationship": "mother"
    },
    {
        "id": 33,
      "firstname": "Sebastian",
      "lastname": "Evans",
      "phonenumber": "+1232109876",
      "email": "sebastian.evans@example.com",
      "address": "130 Birch Avenue, Lakeside",
      "relationship": "friend"
    },
    {
        "id": 34,
      "firstname": "Harper",
      "lastname": "Cruz",
      "phonenumber": "+2341098765",
      "email": "harper.cruz@example.com",
      "address": "131 Pine Drive, Greenfield",
      "relationship": "cousin"
    },
    {
        "id": 35,
      "firstname": "Levi",
      "lastname": "Rivera",
      "phonenumber": "+3450987654",
      "email": "levi.rivera@example.com",
      "address": "132 Cedar Heights, Ridgeview",
      "relationship": "uncle"
    },
    {
        "id": 36,
      "firstname": "Evelyn",
      "lastname": "Morgan",
      "phonenumber": "+4561098765",
      "email": "evelyn.morgan@example.com",
      "address": "133 Elm Street, Brookwood",
      "relationship": "aunt"
    },
    {
        "id": 37,
      "firstname": "Matthew",
      "lastname": "Reed",
      "phonenumber": "+5679876543",
      "email": "matthew.reed@example.com",
      "address": "134 Maplewood Circle, Woodgate",
      "relationship": "friend"
    },
    {
        "id": 38,
      "firstname": "Scarlett",
      "lastname": "Gray",
      "phonenumber": "+6788765432",
      "email": "scarlett.gray@example.com",
      "address": "135 Cedar Grove, Willowfield",
      "relationship": "partner"
    },
    {
        "id": 39,
      "firstname": "Mason",
      "lastname": "Rogers",
      "phonenumber": "+7897654321",
      "email": "mason.rogers@example.com",
      "address": "136 Oakwood Lane, Highland Hills",
      "relationship": "friend"
    }
  ]

  //controllers
  export const getContacts = (req,res) => {
    res.status(200).json(contacts)
  }

  export const getContact = (req, res) => {
    const contactId = parseInt(req.params.id)
    const contact = contacts.find((contact) => contact.id === contactId)
    if( !contact ) {
        return res.status(404).json({message: `A contact with an id ${contactId} was not found!`})
    }

    res.status(200).json(contact)
  }

  export const deleteContact = (req, res) => {
    const contactId = parseInt(req.params.id)
    const contact = contacts.find((contact) => contact.id === contactId)
    if( !contact ) {
        return res.status(404).json({message: `A contact with an id ${contactId} was not found!`})
    }
    const updatedContacts = contacts.filter((contact) => contact.id != contactId)
    res.json({message: `Contact with id ${contactId} was deleted successfully!`, newcontacts: updatedContacts })
  }

  export const createContact = (req, res) => {
    const { firstname, lastname, phonenumber, email,address, relationship } = req.body
    if( !firstname || !lastname || !phonenumber || !email || !address || !relationship ) {
        return res.status(400).json({message: "Missing some fields!"})
    }

    const new_contact = {
        id: contacts.length + 1,
        firstname: firstname,
        lastname: lastname,
        phonenumber: phonenumber,
        email: email,
        address: address,
        relationship: relationship
    }
    contacts.push(new_contact)
    res.status(201).json(contacts)
  }

  export const updateContact = (req, res) => {
    res.json({msg: 'Update Contact'})
  }

  //export default {getContact, getContacts, deleteContact, createContact, updateContact}
  