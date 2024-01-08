# 📚 Blog #2 Apotheose Project

A 4 weeks blog project for the Apotheose 💪. 

🚧  WIP for the subject!

---

<details>

<summary>

## People
</summary>


### 🎓 Team members

| 🎨 FRONT                   | 🔧 BACK                           |
| ------------------------ | ---------------------------- |
| Laetitia BERTOMEU     | Mahamat Ismail IBRAHIM |
| Mathilde MORELLON  | Alexandre JOLIET              |

<br>

### 🧢 Roles

| Product Owner            | Scrum Master           | Git Master            | Lead Dev Back                   |
| ------------------------ | ---------------------- | --------------------| -----------------------------|
| Mathilde MORELLON  | Laetitia BERTOMEU   | Alexandre JOLIET | Mahamat Ismail IBRAHIM |

</details>


<details>

<summary>

## Technological Stack
</summary>

|🎨 FRONT     |🔧 BACK        |
|---------------|----------------|
| HTML / CSS  | NodeJS          |
| JavaScript     | Express          |
| TypeScript?   | EJS                |
| Tailwind ?      | PostgresSQL |

</details>


<details>

<summary>

## Versionning
</summary>


### MVP



### V2 + Vx

- v1 -> Homepage , Menu, List of articles, categories page, a login page, an admin page
- v2 -> Add comments, Option to indicate whether the article has been read or not (highlight ?), Carrousel photos (homepage)
- v3 -> Add images, Search bar, Music app, a page of forgotten password 




## Target


## Browsers

- All (Some features may not work with Internet Explorer)


</details>



<details>

<summary>

## Architecture
</summary>

### 🌳 Tree structure

[https://www.gloomaps.com/felypiHoKZ](https://www.gloomaps.com/felypiHoKZ
)
### 🚗  Routes

**Main**:
- Home: `'/'`
- A propos: `/about`
<br>


**Articles**:
- Articles: `/articles`
- Article: `/article/:id`
<br>


**Categories**:
- Categories: `/categories`
- Articles of one category: `/category/articles`
<br>


**Favorites**:
- Favorites: `/favorites`


**Account**
- Connexion: `/login`
- Account: `/account`
- New article: `/admin/create`
- Draft: `/admin/draft`
- Account Management: `/admin/users`


**Social Media**
- FB: `/#`
- Instagram: `/#`


</details>


<details>

<summary>

## Database
</summary>

### MLD
- user(<ins>**id**</ins>, last_name, first_name, avatar, mail, pseudo, password, #role)
- article(<ins>**id**</ins>, title, description, content, image, created_date, #admin)
- article_has_category(#article, #category)
- category(<ins>**id**</ins>, label, #article)
- comment(<ins>**id**</ins>, content, created_date, #article, #user)
- role(<ins>**id**</ins>, label)


</details>