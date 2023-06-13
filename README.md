<a name="top"></a>
# Oracle APEX Dynamic Action Plugin - Save To Session
This dynamic action plugin is used to save one or more item values in the session state.

<a name="table-of-contents"></a>
## Table of contents

  - [Changelog](#changelog)
  - [Install](#install)
  - [Plugin Settings](#plugin-settings)
  - [How to use](#how-to-use)
  - [Demo Application](#demo_app)
  - [Preview](#preview_image)

<a name="changelog"></a>
## Changelog
### Release 1.0 - Initial Release

[⬆ back to top](#top)

<a name="install"></a>
## Install
- Import plugin file "dynamic_action_plugin_solutions_askmax_save_to_session.sql" from source directory into your application
- (Optional) Deploy the JS files from the "server" directory on your webserver and change the "File Prefix" to webservers folder.

[⬆ back to top](#top)

<a name="plugin-settings"></a>
## Plugin Settings
### Application Attribute
None

### Component Attribute
#### Item(s) to Submit
- Type: `Page Items`

List of application item(s) to be set into session state. For multiple items, separate each item name with a comma. You can type in the name or pick from the list of available items. If you pick from the list and there is already text entered, then a comma is placed at the end of the existing text, followed by the item name returned from the list.

[⬆ back to top](#top)

<a name="demo_app"></a>
## Demo Application
[https://askmax.solutions/ords/r/max_playground/plg_save_to_session](https://askmax.solutions/ords/r/max_playground/plg_save_to_session)

<a name="preview_image"></a>
## Preview
## ![](https://raw.githubusercontent.com/maxime-tremblay/apex-plugin-savetosession/main/preview.gif)

[⬆ back to top](#top)
