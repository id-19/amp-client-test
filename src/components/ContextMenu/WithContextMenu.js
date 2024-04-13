import { ContextMenuTarget, Menu, MenuItem } from "@blueprintjs/core";
import Mixpanel from 'mixpanel'; // Assuming Mixpanel is already set up elsewhere in the project

const WithContextMenu = class RightClickMeWithContext extends React.Component {
  handleSave = () => {
    // Assuming there's existing logic here for saving
    Mixpanel.track("Save Item", {
      "Action": "Save",
      "Context": "Right-click Menu"
    });
  }

  handleDelete = () => {
    // Assuming there's existing logic here for deleting
    Mixpanel.track("Delete Item", {
      "Action": "Delete",
      "Context": "Right-click Menu"
    });
  }

  render() {
    return this.props.children;
  }

  renderContextMenu() {
    return (
      <Menu>
        <MenuItem onClick={this.handleSave} text="Save" />
        <MenuItem onClick={this.handleDelete} text="Delete" />
      </Menu>
    );
  }

  onContextMenuClose() {
    // Optional method called once the context menu is closed.
  }
}

export default ContextMenuTarget(WithContextMenu);