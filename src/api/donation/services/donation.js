'use strict';

/**
 * donation service
 */

const { createCoreService } = require('@strapi/strapi').factories;


module.exports = {
    

   
};


module.exports = createCoreService('api::donation.donation', ({strapi}) => ({
    async generateAndSend(donationData) {
        // Prepare the data for DocuSeal
        const docuSealData = {
            template_id: process.env.DOCUSEAL_TEMPLATE_ID,
            submission: [
                {
                    submitters: [
                        {
                            name: "Donor",
                            email: donationData.email,
                            values: {
                                "name": donationData.name,
                                "full_name": donationData.full_name,
                                "date": donationData.date,
                                "pancard": donationData.pancard,
                                "address": donationData.address,
                                "amount": donationData.amount
                                // Add other fields as needed
                            }
                        }
                        // Add other submitters if needed
                    ]
                }
            ]
        };

        const docuSealResponse = await this.sendToDocuSeal(docuSealData);
       
        return docuSealResponse
    },

    async sendToDocuSeal(data) {
        const response = await fetch(process.env.DOCUSEAL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': process.env.DOCUSEAL_AUTH_TOKEN
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        return result;
    }

}));
