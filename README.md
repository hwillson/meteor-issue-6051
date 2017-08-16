# meteor-issue-6051

Reproduction for https://github.com/meteor/meteor/issues/6051.

## Running

1. `git clone https://github.com/hwillson/meteor-issue-6051.git`
2. `cd meteor-issue-6051; meteor npm i; meteor`

## Issue

When `widgetsCollection.insert({ _id: 'from-client', name: undefined });` is
called from the client, a `{ "_id" : "from-client" }` record is created in
Mongo. When `widgetsCollection.insert({ _id: 'from-server', name: undefined });`
is called from the server, a `{ "_id" : "from-server", "name" : null }` record
is created in Mongo. 

