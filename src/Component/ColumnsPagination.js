
export const COLUMNSPAGINATION = [
    {
      Header: "Id",
      accessor: "id",
      disableFilters: true
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Avatar",
      accessor: "avatar",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "contact",
    },
    {
        Header: "Password",
        accessor: "password",
      },
  ];
  
  export const GROUPED_COLUNMS = [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      Footer: "Name",
      columns: [
        {
          Header: "First Name",
          Footer: "First Name",
          accessor: "first_name",
        },
        {
          Header: "Last Name",
          Footer: "Last Name",
          accessor: "last_name",
        },
      ],
    },
    {
      Header: "Info",
      Footer: "Info",
      columns: [
        {
          Header: "Email",
          Footer: "Email",
          accessor: "email",
        },
        {
          Header: "Phone",
          Footer: "Phone",
          accessor: "phone",
        },
      ],
    },
  ];
  