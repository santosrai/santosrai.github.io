---
title: "Thunderbird addon"
date: "2019-11-26 07:14:12"
template: "post"
draft: false
slug: "/posts/ThunderbirdAddon/"
category: "Thunderbird addon"
tags:
  - "Thunderbirdaddon"
  - "JavaScript"
description: "Learning note on Thunderbird addon"
---

**Introduction** 

Steps for staring thunderbird addon project
1.Preparing the Development environment
2.Add-on Template
3.Adding UI
4.Adding JS

1.Preparing the Development Environment

- Open RUN
- Type thunderbird -ProfileManager
- It will open ProfileManager of Thunderbird
- Create new Profile "Development" or any name you like

2.Add-on Template
Create Example add-on ID
 Example : my-addon@my.example.com

There will be extension folder inside your newly created profile.Go to your extension folder and create folder name "my-addon@my.example.com" inside the extension folder.

```
{Profile_Dir}
|--extensions
  |--my-addon@my.example.com
```

install.rdf
It is XML file which contains infromation about the extension.

```xml
<?xml version="1.0"?>
<RDF xmlns="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:em="http://www.mozilla.org/2004/em-rdf#">

  <Description about="urn:mozilla:install-manifest">
    <em:id>my-addon@my.example.com</em:id>
    <em:version>0.1</em:version>
    <em:type>2</em:type>

    <!-- Thunderbird -->
    <em:targetApplication>
        <Description>
            <em:id>{3550f703-e582-4d05-9a08-453d09bdfdc6}</em:id>
            <em:minVersion>1.5</em:minVersion>
            <em:maxVersion>60.*</em:maxVersion>
        </Description>
    </em:targetApplication>
    <!-- Front End MetaData -->
    <em:name>Test Addon</em:name>
    <em:description>Test Addon for Thunderbird</em:description>
    <em:creator>Developer Me</em:creator>
    <em:homepageURL>https://developer.mozilla.org/</em:homepageURL>
  </Description>
</RDF>

<!-- Descriptions -->
em:id          =>add-on id
em:version     =>add-on version number
em:name        =>add-on name
em:description =>addon description
em:creator     =>addon developer
em:homepageURL =>addon developer site

```

3.Adding UI
Chrome File: chrome.manifest
UI File : my.xul

Folder Structure

```
{my-addon@my.example.com}
    - index.rdf
    - chrome.manifest
    - chrome
       - content
          - my.xul
```

1.chrome.manifest file
It tells Thunderbird what packages and overlays are provided by the extension

```
content my-addon chrome/content/
overlay chrome://messenger/content/messenger.xul chrome://my-addon/content/my.xul
```

- content: specifies the type of material in the package
- my-addon: is the name chrome package (specified in the first segment of <em:id> in the install.rdf file)
- chrome/content : location of the package's files
- Second line overaly: Tell Thunderbird to merge my.xul into messenger.xul

2.my.xul file
It is resposible for user interface of your addon.

```xml
<overlay id="sample"
        xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul">
    <statusbar id="status-bar">
        <button label="Click Me" />
    </statusbar>
</overlay>
```

4.Adding JS
Inside the xul file

```xml
<overlay id="sample"
        xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul">
    <statusbar id="status-bar">
        <button label="Click Me" oncommand="MyCommand(this)"/>
    </statusbar>
 
    <script type="application/x-javascript"><![CDATA[
function MyCommand( me ) {
    me.label = 'Hello, You have clicked it';
}
    ]]></script>
</overlay>

```

Another example

```xml
<overlay id="sample"
        xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul">
    <statusbar id="status-bar">
        <button label="Click Me" oncommand="MyCommand(this)"/>
    </statusbar>

    <script type="application/x-javascript" src="my.js" />
</overlay>
```

For separate file system as my.js file

```js
function MyCommand( me ) {
    var consoleService = Components.
            classes["@mozilla.org/consoleservice;1"].
            getService( Components.interfaces.nsIConsoleService );
    consoleService.logStringMessage( 'You have clicked it' );
}
```
