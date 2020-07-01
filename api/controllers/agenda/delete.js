module.exports = {


  friendlyName: 'Delete',


  description: 'Delete agenda.',


  inputs: {
    id:{
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function ({id}) {
    await Contacts.destroy(id)
    // All done.
    return;

  }


};
