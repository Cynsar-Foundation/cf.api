'use strict';

/**
 * project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project.project', ({strapi}) => ({

    // To send review emails related to projects
    async sendReviewEmail(reviewer, project, updatedBy) {
        const emailTemplate = {
            subject: `Review requested for payments - ${project.ProjectName}`,
            text: `Hello ${reviewer.FullName}, there are new payments added today that require your review. Please check them.`,
            html: `
                <div style="background-color: #f4f4f4; padding: 20px 0; height: 100%; width: 100%;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" align="center" style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
                        <tr>
                            <td style="padding: 40px; text-align: center;">
                                <h1 style="font-family: Arial, sans-serif;">Hello ${reviewer.FullName}</h1>
                                <p style="font-family: Arial, sans-serif;">There are new payments added by ${updatedBy.firstname} - today that require your review. Please check them for the project ${project.ProjectName} </p>
                            </td>
                        </tr>
                    </table>
                </div>
            `,
        };
        await strapi.plugins['email'].services.email.send({
            to: reviewer.email,
            from: 'jbd@cynsar.foundation',
            cc: 'help@cynsar.foundation',
            replyTo: 'help@cynsar.foundation',
            subject: emailTemplate.subject,
            text: emailTemplate.text,
            html: emailTemplate.html,
        });
    },

    // Fetch Projects Related Data

        async fetchProjectDetails(dataId) {
            return await strapi.entityService.findOne('api::project.project', dataId, {
                populate: {
                    people: {
                        on: {
                            'members.persons': {
                                populate: {
                                    members: {
                                        populate: ['Who', 'users_permissions_user']
                                    }
                                }
                            }
                        }
                    },
                    payments: {
                        on: {
                            'payments.payments': {
                                populate: ['*']
                            }
                        }
                    }
                }
            });
        }
    
}));
