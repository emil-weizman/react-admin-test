import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostCreate, PostEdit, PostList } from "./posts";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./Dashboard";
import { authProvider } from "./authProvides";

export const App = () => {
  console.log("test");
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource
        name="posts"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
        icon={PostIcon}
      />
      <Resource
        name="users"
        list={UserList}
        recordRepresentation="name"
        icon={UserIcon}
      />
    </Admin>
  );
};
