# Cynsar Foundation API

Welcome to the Cynsar Foundation API, built on top of Strapi. This API is designed to manage and provide data related to our foundation's operations, including users, members, donations, supply chain recordings, projects, and expenses.

## Table of Contents

- [Authors](#authors)
- [Why Strapi?](#why-strapi)
- [Why Moving to Directus?](#why-moving-to-directus)
- [Dependency](#depdencies)
- [API Endpoints](#api-endpoints)
- [Public Access](#public-access)
- [Future Work](#future-work)
- [Use Foundation API](#use)


## Authors

- **Saransh Sharma**

## Why Strapi?

Strapi is a leading open-source headless CMS. It's 100% Javascript, fully customizable, and developer-first. Here's why we chose Strapi:

- **Flexibility**: Easily match our project's needs.
- **Security**: Provides robust user permissions and roles out of the box.
- **Performance**: Built on top of Node.js, Strapi ensures optimal performance.
- **Developer-friendly**: Offers a powerful CLI and admin panel, and is plugin-oriented.

## Why Moving to Directus?

In our journey with Strapi, we encountered several obstacles. One significant challenge was the necessity to design or write code for each workflow. This approach risked increasing our 'code debt'—a concept you can explore further [here]. Our aim is to offer a streamlined interface for administrators, enabling them to create unique logical workflows in Directus without the need for coding. Additionally, a key advantage of transitioning to Directus is the flexibility it offers in allowing real-time schema redesigns.


## Dependencies

Strapi has one dependency by default for the api to function that is DB we recommend using Postgres

- **Postgres**
- **Docuseal**: For board documents other documentation related activites that the foundation may take.

## API Endpoints

- **Users**: Manage and retrieve user data.
- **Members**: Information about foundation members.
- **Donations**: Track and manage donations.
- **JYT_Sourcing**: Record supply chain data.
- **Projects**: Information about ongoing and past projects.
- **Expenses**: Track and manage foundation expenses.
- **Board**: Track and manage Board activities.

## File Storage 

All of the files are stored at the AWS S3, we are willing to explore the option of storing our files on the other types of decentralised file systems.

## Public Access

Public users can view the data by registering for an API key. Get your API key [here](<API key registration link>).

## Future Work

We are continuously working to improve and automate the API. Our vision is to be an "API-first" non-profit, ensuring seamless integration and data accessibility.

## Use Foundation API

We suggest using the code base for internal testing. If you wish to deploy it, we recommend using Heroku. Alternatively, you can also deploy it on railways.app. 

If you are a not-for-profit organization and are considering adopting an API-first approach, here are some compelling reasons:

**Problems with Existing Solutions:**
1. Software solutions tailored for NGOs or non-profits tend to be prohibitively expensive.
2. Many of these solutions fail to address the unique challenges of last-mile setups.
3. A majority of them focus predominantly on the donation aspect, neglecting other crucial functionalities.

**Advantages of Our API:**
1. **Customization at Your Fingertips:** With our API, you have the autonomy to customize and tailor the solution to your organization's specific needs.
2. **Transparency Through API-First:** Adopting an API-first approach ensures that all operations are transparent, fostering trust among your stakeholders.
3. **Data Ownership with Foundation API:** Our API empowers you with complete ownership and control over your data, ensuring that you can leverage it in ways that align with your organization's mission and values.


---

Thank you for your interest in the Cynsar Foundation API. We welcome contributions and feedback!

