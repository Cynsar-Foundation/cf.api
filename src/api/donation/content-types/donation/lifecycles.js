const donation = require("../../controllers/donation");


module.exports = {
      async afterCreate(result) {

        const {donation_date , payment, amount} = result.result.donation
        // Extract necessary information
        const relatedMember = await strapi.entityService.findOne('api::donation.donation', result.result.id, {
            populate: ['member', 'member.Who']
    
        })

            const { email, full_name , pancard, address} = relatedMember.member.Who
    
            // Create the email content

            const donationData = {
              email: email,
              full_name: full_name,
              date : donation_date, 
              amount: amount,
              pancard: pancard,
              address: address
            };
            console.log(donationData)
            // Sending to the service
            const sendToDocuSeal = await strapi.service('api::donation.donation').generateAndSend(donationData);

            // Now we update the record, 

            const update = await strapi.entityService.update('api::donation.donation', result.result.id, {
                data: {
                    hasSentRec: true, 
                    docuSentID: sendToDocuSeal[0].uuid
                }
            })
      },
  };
  