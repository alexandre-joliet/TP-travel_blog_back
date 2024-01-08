BEGIN;

INSERT INTO "role" ("label") VALUES 
('Admin'),
('User');

INSERT INTO "user" ("last_name", "first_name", "avatar", "mail", "pseudo", "password", "role_id") VALUES
('DOE', 'John', 'test', 'johndoe@mail.com', 'JohnD', 'password', 1),
('DUPONT', 'Martin', 'test', 'martindupont@mail.com', 'MartinM', 'password', 2);


INSERT INTO "category" ("label", "creator") VALUES
('Afrique', 1),
('Asie', 1),
('Amérique du Nord', 1),
('Amérique du Sud', 1),
('Antarctique', 1),
('Europe', 1),
('Océanie', 1);


INSERT INTO "article" ("title", "description", "content", "image", "author") VALUES
('L''Antarctique : un univers gelé à découvrir',

'Bienvenue dans un monde où le froid et le mystère se rencontrent, où la nature règne en maître et où l''aventure est à chaque coin de glace. L''Antarctique, ce continent gelé situé au pôle Sud, est une destination de rêve pour les amoureux de la nature et les explorateurs intrépides. Préparez-vous à découvrir un paysage immaculé, une faune incroyable et une expérience unique qui restera à jamais gravée dans vos souvenirs.',

'<h2>Beauté glaciale</h2> 
<p>L''Antarctique, avec ses paysages époustouflants, offre une incroyable diversité de vues spectaculaires. Des immenses glaciers aux sommets enneigés, en passant par les icebergs aux formes les plus étonnantes, chaque coin de ce continent est un véritable chef-d''œuvre de la nature. La lumière éclatante du soleil se reflétant sur la glace crée un spectacle unique et enchanteur qui vous laissera sans voix.</p>

<h2>Faune extraordinaire</h2> 
<p>L''Antarctique abrite une faune incroyablement diversifiée et fascinante. Imaginez-vous en train d''observer des colonies de manchots, ces adorables oiseaux qui se déplacent maladroitement mais avec grâce sur la glace. Vous aurez également l''occasion de voir des phoques se prélassant sur les icebergs et d''admirer des baleines majestueuses émergeant des profondeurs de l''océan. C''est un véritable paradis pour les passionnés de biodiversité et d''animaux sauvages.</p>

<h2>Expérience unique</h2> 
<p>Partir à l''aventure en Antarctique est bien plus qu''un simple voyage, c''est une expérience de vie. Que vous choisissiez de naviguer à travers les eaux gelées ou de fouler la glace lors d''une randonnée, chaque instant sera empreint de magie et de découvertes. Vous vous sentirez vraiment connecté à la nature, loin du tumulte de la vie quotidienne, dans un lieu où le temps semble s''arrêter.</p>

<p>L''Antarctique est une destination de rêve qui offre une expérience inoubliable à tous les voyageurs en quête d''aventure et de découverte. Des paysages à couper le souffle, une faune extraordinaire et une sérénité absolue vous attendent dans cette région isolée du monde. Alors, n''hésitez plus, embarquez pour l''Antarctique et laissez-vous envoûter par la beauté glaciale de ce paradis gelé.</p>

<p>J''espère que cet article vous a donné envie de voyager en Antarctique ! Bon voyage !</p>', 
'https://api-oblog2.onrender.com/images/Antarctique.jpg', 1),


('Le Cap de Bonne-Espérance : un paradis naturel entre océan et montagnes',

'Bienvenue au Cap de Bonne-Espérance, un joyau situé à l''extrémité australe de la péninsule du Cap en Afrique du Sud. Cette destination magique offre un mélange unique de paysages à couper le souffle, de faune sauvage étonnante et d''une histoire riche. Que vous soyez passionné par la nature, l''aventure ou la culture, le Cap de Bonne-Espérance ne manquera pas de vous émerveiller.',

'<h2>Des paysages à couper le souffle</h2>
<p>Imaginez des falaises abruptes qui plongent dans l''océan Atlantique, des plages de sable blanc à perte de vue et des montagnes majestueuses en toile de fond. Le Cap de Bonne-Espérance est un véritable paradis pour les amateurs de paysages spectaculaires. Ne manquez pas de vous rendre au sommet de la montagne de la Table pour admirer une vue panoramique à couper le souffle sur la baie du Cap.</p>

<h2>La faune et la flore uniques</h2>
<p>Le Cap de Bonne-Espérance abrite une incroyable diversité de faune et de flore. C''est l''endroit idéal pour observer des animaux emblématiques tels que les pingouins du Cap, les phoques à fourrure et les babouins. Vous pourrez également vous aventurer dans le parc national de la Péninsule du Cap pour découvrir une flore exceptionnelle, comprenant des plantes endémiques et des fleurs colorées. Si vous êtes chanceux, vous pourriez même apercevoir des baleines au large des côtes.</p>

<h2>Une histoire riche et captivante</h2>
<p>Le Cap de Bonne-Espérance est imprégné d''une riche histoire qui remonte aux premiers explorateurs européens. Le phare du Cap de Bonne-Espérance, datant de 1859, est l''un des points d''intérêt les plus emblématiques de la région. Explorez les anciennes fortifications de la colonie du Cap néerlandaise, qui témoignent du passé tumultueux de la région. Ne manquez pas non plus le musée du district de Simon''s Town pour en apprendre davantage sur l''histoire maritime de la région.</p>

<p>Le Cap de Bonne-Espérance est une destination de rêve en Afrique qui ne manquera pas de vous émerveiller. Avec ses paysages à couper le souffle, sa faune et sa flore uniques, ainsi que son histoire captivante, cette région offre une expérience inoubliable. Que vous soyez un amoureux de la nature, un passionné d''histoire ou un aventurier à la recherche de nouvelles découvertes, le Cap de Bonne-Espérance est l''endroit parfait pour réaliser vos rêves de voyage en Afrique. Préparez-vous à être ébloui par la beauté naturelle de cette destination exceptionnelle !</p>', 
'https://api-oblog2.onrender.com/images/Cap de Bonne -Esperance.jpg',
1),

('À la découverte de la magie de l''Alaska : une destination de rêve en Amérique du Nord',

'Bienvenue dans le pays des merveilles sauvages de l''Amérique du Nord : l''Alaska. Avec ses paysages grandioses, sa faune incroyable et sa culture unique, l''Alaska est une destination de rêve pour les amateurs de voyages d''aventure. Préparez-vous à être émerveillé par la beauté brute de cette région spectaculaire. Suivez-moi, alors que je pars à la découverte des joyaux cachés de l''Alaska.',

'<h2>L''expérience de la vie sauvage</h2>
<p>L''Alaska est réputée pour sa faune abondante et diversifiée. Une visite dans cette destination de rêve vous donnera l''occasion de voir des ours bruns majestueux, des orques gracieuses, des baleines à bosse énormes et bien d''autres espèces animales fascinantes. Vous pourrez également observer des aigles à tête blanche survolant les paysages à couper le souffle de l''Alaska. Une excursion en bateau ou en kayak vous permettra de vous rapprocher de ces magnifiques créatures dans leur habitat naturel.</p>

<h2>Des parcs nationaux époustouflants</h2>
<p>L''Alaska regorge de parcs nationaux incroyables, parfaits pour les amoureux de la nature et les adeptes d''aventures en plein air. Le parc national de Denali est l''un des joyaux de l''Alaska, offrant des vues à couper le souffle sur le mont Denali, le plus haut sommet d''Amérique du Nord. Explorez les sentiers de randonnée, partez en expédition en camping ou prenez un vol panoramique en hélicoptère pour explorer le parc sous un angle différent.</p>

<h2>Les aurores boréales</h2>
<p>L''Alaska est l''une des destinations les plus prisées pour l''observation des aurores boréales, un phénomène naturel magique qui illumine le ciel nocturne avec des couleurs vibrantes. Imaginez-vous en train de contempler les danses colorées des aurores boréales dans un silence absolu, entouré de la nature sauvage de l''Alaska. La meilleure période pour observer ce spectacle céleste est de septembre à avril, lorsque les nuits sont les plus longues.</p>

<p>L''Alaska est une destination de rêve en Amérique du Nord qui offre une expérience de voyage unique. Des paysages grandioses, une faune incroyable et des aurores boréales magiques font de cette région un véritable paradis pour les aventuriers. Alors, préparez votre sac à dos, enfilez vos bottes de randonnée et partez à la découverte de l''Alaska, une destination qui vous laissera des souvenirs inoubliables pour toute une vie.</p>', 
'https://api-oblog2.onrender.com/images/Alaska.jpg',
1),

('Cartagena : un voyage enchanteur au cœur de l''histoire et de la beauté en Colombie',

'Bienvenue à Cartagena, une destination de rêve en Amérique du Sud qui ne manquera pas de vous enchanter. Cette ville colorée, située sur la côte des Caraïbes colombiennes, est un véritable joyau culturel et historique. Avec ses rues pavées, ses bâtiments coloniaux et son ambiance chaleureuse, Cartagena est l''endroit idéal pour une escapade magique.',

'<h2>La vieille ville</h2>
<p>Un voyage dans le temps La vieille ville de Cartagena, également appelée "La Ciudad Amurallada", est un véritable bijou architectural. Ses rues étroites et ses maisons colorées vous transportent instantanément dans le passé colonial de la ville. Flânez dans les ruelles pavées et imprégnez-vous de l''atmosphère romantique qui règne ici. N''oubliez pas de visiter les célèbres remparts de Cartagena, qui offrent une vue imprenable sur la mer des Caraïbes.</p>

<h2>Les plages idylliques</h2>
<p>Un paradis sur terre Cartagena regorge de magnifiques plages de sable blanc et d''eaux cristallines. L''archipel des Rosario, situé à quelques kilomètres de la côte, est un véritable paradis pour les amateurs de plongée et de snorkeling. Explorez les récifs coralliens colorés et nagez avec une multitude de poissons tropicaux. Si vous préférez une journée de farniente, les plages de Bocagrande et de Playa Blanca vous attendent avec leur sable fin et leurs eaux turquoise.</p>

<h2>La cuisine locale</h2>
<p>Un véritable festin pour les papilles La gastronomie colombienne est riche en saveurs et en couleurs, et Cartagena ne fait pas exception. Ne manquez pas de déguster le célèbre ceviche, un plat à base de fruits de mer marinés dans du jus de citron vert et d''agrumes. Pour les amateurs de viande, le "Bandeja Paisa" est un incontournable, avec ses haricots rouges, son riz, ses bananes plantains frites et sa viande grillée. Et bien sûr, n''oubliez pas de goûter le délicieux café colombien, réputé dans le monde entier.</p>

<p>Cartagena est bien plus qu''une simple destination de rêve en Amérique du Sud. C''est un véritable enchantement, où l''histoire, la culture et la beauté se mélangent pour créer une expérience inoubliable. Que vous soyez à la recherche d''une escapade romantique, d''une aventure culturelle ou d''une détente sur la plage, Cartagena saura vous combler. Alors, préparez vos valises et partez à la découverte de ce joyau des Caraïbes colombiennes ! Bon voyage !</p>', 
'https://api-oblog2.onrender.com/images/cartagena.jpg',
1),

('Émerveillez vos sens : l''île paradisiaque de Koh Rong, Cambodge',

'Lorsque l''on rêve d''une escapade exotique, l''Asie est souvent au sommet de la liste. Parmi les innombrables destinations asiatiques, une perle rare brille au large des côtes cambodgiennes : l''île de Koh Rong. Avec ses plages de sable blanc immaculé, ses eaux cristallines et sa nature luxuriante, cette île paradisiaque est une véritable invitation à l''évasion. Préparez-vous à un voyage sensoriel extraordinaire à Koh Rong, où vos rêves de vacances se réaliseront.',

'<h2>L''accueil chaleureux et la culture cambodgienne</h2>
<p>Dès votre arrivée à Koh Rong, vous serez accueilli avec un sourire radieux par les habitants locaux. Leur hospitalité légendaire vous fera sentir comme chez vous. Plongez-vous dans la culture cambodgienne en explorant les villages traditionnels, en goûtant la délicieuse cuisine locale et en participant à des danses folkloriques envoûtantes. La richesse de cette culture vous offrira une expérience authentique et inoubliable.</p>

<h2>Les plages de carte postale</h2>
<p>Préparez-vous à être émerveillé par les plages de Koh Rong. Imaginez-vous vous prélassant sur des étendues de sable blanc, bercé par les doux murmures des vagues. Les eaux turquoise et transparentes vous inviteront à explorer les fonds marins lors de sessions de plongée ou de snorkeling. Les plages de Long Beach, Sok San Beach et Coconut Beach feront de vos journées sur l''île une véritable carte postale vivante.</p>

<h2>La nature préservée et la biodiversité incroyable</h2>
<p>Koh Rong est une véritable réserve naturelle, abritant de nombreuses espèces de faune et de flore uniques. Explorez la jungle dense et mystérieuse de l''île lors de randonnées inoubliables. Laissez-vous émerveiller par les singes facétieux, les oiseaux colorés et les papillons aux ailes chatoyantes. Pour une expérience encore plus magique, partez à la découverte du plancton bioluminescent qui illumine les eaux nocturnes de Koh Rong.</p>

<p>Koh Rong est une destination de rêve en Asie qui vous transportera dans un monde de beauté naturelle et d''aventures exaltantes. Que vous soyez à la recherche de détente sur des plages paradisiaques, d''explorations sous-marines ou d''un contact authentique avec la culture cambodgienne, cette île a tout pour vous combler. Préparez vos bagages, laissez-vous emporter par l''excitation et envolez-vous vers cette destination de rêve en Asie. Votre voyage à Koh Rong sera à coup sûr un souvenir inoubliable, gravé dans votre esprit pour toujours.</p>', 
'https://api-oblog2.onrender.com/images/Koh Rong Cambodge.jpg',
1),

('L''Océanie : une escapade paradisiaque vers des destinations de rêve',

'Bienvenue dans le paradis de l''Océanie, un continent aux mille splendeurs ! Imaginez des plages de sable blanc bordées d''eaux turquoise, des paysages époustouflants et une culture riche et diverse. Dans cet article, nous vous emmènerons à la découverte de trois destinations incontournables de rêve en Océanie. Préparez-vous à un voyage captivant au cœur de cet archipel enchanteur.',

'<h2>Bora Bora, Polynésie française</h2>
<p>Bora Bora, joyau de la Polynésie française, est une destination de rêve pour les voyageurs en quête de luxe et de beauté. Imaginez-vous loger dans une villa sur pilotis, surplombant un lagon cristallin. Vous aurez l''impression de flotter au-dessus d''un aquarium géant ! Profitez des activités nautiques telles que la plongée avec tuba, la plongée sous-marine ou un tour en bateau pour admirer la richesse des fonds marins. Et n''oublions pas les couchers de soleil à couper le souffle qui viendront parfaire votre séjour à Bora Bora.</p>

<h2>Île du Nord, Nouvelle-Zélande</h2>
<p>L''île du Nord de la Nouvelle-Zélande est une destination de rêve pour les amoureux de la nature. De la région de Rotorua avec ses geysers et ses sources d''eau chaude, en passant par les magnifiques paysages de la région de Tongariro, où vous pourrez faire une randonnée sur le fameux parcours du Tongariro Crossing, ce lieu regorge de merveilles naturelles à explorer. N''oubliez pas de visiter la ville d''Auckland, la capitale, pour apprécier son ambiance cosmopolite et sa scène artistique vibrante.</p>

<h2>Great Barrier Reef, Australie</h2>
<p>Laissez-vous émerveiller par la beauté du plus grand récif corallien du monde, le Great Barrier Reef. Situé au large de la côte nord-est de l''Australie, ce site classé au patrimoine mondial de l''UNESCO est un véritable trésor naturel. Explorez les fonds marins en plongée sous-marine ou en plongée avec tuba pour admirer les coraux colorés et la vie marine incroyablement diverse. Vous pourrez également faire une excursion en bateau pour observer les majestueuses baleines à bosse lors de leur migration. Une expérience inoubliable !</p>

<p>L''Océanie est sans aucun doute une destination de rêve pour les voyageurs en quête d''aventure, de détente et de découvertes culturelles. Que vous choisissiez de vous détendre sur les plages de Bora Bora, de vous immerger dans la nature luxuriante de l''île du Nord de la Nouvelle-Zélande ou d''explorer les merveilles sous-marines du Great Barrier Reef en Australie, votre voyage en Océanie sera inoubliable. Alors, préparez vos valises et laissez-vous embarquer dans cette escapade paradisiaque !

J''espère que cet article de blog vous a inspiré pour votre prochaine aventure en Océanie. Bon voyage !</p>', 
'https://api-oblog2.onrender.com/images/Nouvelle-Zélande.jpg',
1),

('Santorin : l''île paradisiaque aux couleurs envoûtantes',

'Bienvenue sur l''île de Santorin, un véritable joyau de la mer Égée. Nichée au cœur des Cyclades, cette destination de rêve est réputée pour ses paysages à couper le souffle, ses maisons blanchies à la chaux et ses couchers de soleil spectaculaires. Préparez-vous à être enchanté par la beauté unique de Santorin.',

'<h2>Découverte de l''île</h2>
<p>Dès votre arrivée, vous serez accueilli par les maisons blanches au toit bleu caractéristiques de Santorin. Explorez les ruelles étroites et sinueuses de la capitale, Fira, et laissez-vous émerveiller par les panoramas imprenables sur la mer Égée. Ne manquez pas non plus la découverte des villages pittoresques d''Oia et d''Imerovigli, qui offrent des vues à couper le souffle.</p>

<h2>Plages de sable noir et de falaises</h2>
<p>L''une des particularités de Santorin réside dans ses plages de sable noir et de falaises. Rendez-vous à la plage de Perissa pour vous détendre au soleil et vous baigner dans les eaux cristallines. Si vous préférez une ambiance plus animée, essayez la plage de Kamari, où vous trouverez des bars de plage et des sports nautiques.</p>

<h2>Dégustation de vins et de spécialités locales</h2>
<p>Santorin est également réputée pour sa production de vins de qualité. Profitez de votre séjour pour découvrir les vignobles de l''île et déguster des cépages locaux tels que l''assyrtiko et le vinsanto. Ne manquez pas non plus de goûter aux spécialités culinaires de Santorin, comme la fava, une purée de pois jaunes, et les délicieux fromages locaux.</p>

<h2>Les couchers de soleil inoubliables</h2>
<p>Votre voyage à Santorin ne serait pas complet sans assister à un coucher de soleil sur l''île. Dirigez-vous vers Oia, où vous pourrez trouver de nombreux points de vue panoramiques pour admirer le spectacle céleste. Laissez les couleurs chaudes du soleil se fondre dans la mer et capturez ce moment magique pour créer des souvenirs inoubliables.</p>

<p>Santorin est sans aucun doute une destination de rêve en Europe. Entre ses paysages à couper le souffle, ses plages uniques, sa gastronomie délicieuse et ses couchers de soleil inoubliables, cette île vous laissera des souvenirs à vie. N''attendez plus, réservez votre voyage à Santorin et plongez dans un monde de beauté et de sérénité.</p>', 
'https://api-oblog2.onrender.com/images/santorin2.jpg',
1),

('Découvrez la magie de New York, la ville qui ne dort jamais !',

'New York, la ville qui ne dort jamais, est une destination incontournable pour les amateurs de voyages. Cette métropole vibrante et cosmopolite offre une expérience unique à chaque coin de rue. Que vous soyez un amateur de culture, un passionné de shopping ou un fin gourmet, New York a tout pour vous séduire.',

'<h2>Une métropole vibrante</h2>
<p>Lorsque vous vous promenez dans les rues animées de Manhattan, vous serez immédiatement plongé(e) dans l''effervescence de la ville. Les gratte-ciel emblématiques tels que l''Empire State Building et le One World Trade Center dominent l''horizon, offrant des vues à couper le souffle sur la skyline new-yorkaise. Ne manquez pas de vous imprégner de l''atmosphère électrique de Times Square, avec ses panneaux lumineux géants et son ambiance cosmopolite.</p>

<h2>Plongée dans la culture et l''Histoire</h2>
<p>Les amoureux de l''art et de la culture trouveront leur bonheur dans les nombreux musées de la ville. Visitez le Metropolitan Museum of Art, connu sous le nom de "Met", pour admirer des collections fascinantes allant de l''art égyptien à l''art contemporain. Le Museum of Modern Art (MoMA) est également un incontournable, abritant des chefs-d''œuvre de Picasso, Van Gogh et d''autres grands artistes.</p>

<h2>Shopping et diversité</h2>
<p>Pour les accros du shopping, New York est le paradis. Explorez les boutiques de la légendaire 5th Avenue, où vous trouverez des enseignes de luxe et des magasins branchés. Faites un détour par Macy''s, le plus grand magasin du monde, ou par les célèbres grands magasins de Herald Square. Pour des trouvailles uniques, flânez dans les marchés de rue de SoHo ou de Williamsburg, où vous découvrirez des créations originales et des boutiques vintage.</p>

<h2>Gastronomie</h2>
<p>La cuisine new-yorkaise est renommée dans le monde entier. Ne manquez pas l''occasion de déguster une part de pizza authentique dans un des nombreux pizzerias de la ville. Explorez les quartiers ethniques comme Chinatown, Little Italy et Harlem pour goûter à une variété de saveurs exquises. Terminez votre journée en beauté en dégustant un cocktail sur l''un des rooftops branchés de la ville, offrant des vues panoramiques spectaculaires.</p>

<p>New York est bien plus qu''une simple ville, c''est une expérience à part entière. Préparez-vous à être ébloui(e) par son énergie débordante, sa diversité culturelle et ses attractions emblématiques. Que vous soyez un premier voyageur ou un habitué de la ville, New York ne manquera jamais de vous surprendre et de vous enchanter.

Alors, qu''attendez-vous ? Préparez vos valises et plongez dans l''effervescence de la Big Apple !
Bon voyage !</p>', 
'https://api-oblog2.onrender.com/images/new york.jpg',
1),

('Découvrez les merveilles de Cuba : un voyage inoubliable !',

'Cuba est une destination enchanteresse qui offre une expérience de voyage unique en son genre. Que vous soyez attiré par ses plages de sable blanc, sa riche culture, son histoire fascinante ou sa musique envoûtante, Cuba a tout pour plaire. Dans cet article, nous vous emmènerons à la découverte des trésors de cette île des Caraïbes, en explorant ses villes animées, ses paysages pittoresques et ses traditions culturelles.',

'<h2>Destination 1 : La Havane - Un mélange captivant d''histoire et de modernité</h2>
<p>La capitale cubaine, La Havane, est un incontournable lors d''un voyage à Cuba. Promenez-vous dans les rues colorées de la Vieille Havane, classée au patrimoine mondial de l''UNESCO, et imprégnez-vous de son atmosphère nostalgique. Admirez les voitures classiques qui sillonnent les rues, visitez le célèbre Malecón et explorez les musées fascinants de la ville. Ne manquez pas non plus l''expérience de la musique cubaine dans les nombreux bars et clubs de salsa de la ville.</p>

<h2>Destination 2 : Varadero - Paradis des plages</h2>
<p>Si vous recherchez des plages de rêve, Varadero est l''endroit idéal. Cette station balnéaire populaire, située sur une péninsule étroite, offre des kilomètres de sable fin bordés par les eaux cristallines de la mer des Caraïbes. Profitez du soleil, faites de la plongée avec tuba, ou détendez-vous simplement dans l''un des nombreux complexes hôteliers de luxe. Varadero est un véritable paradis tropical qui comblera les amateurs de farniente et de sports nautiques.</p>

<h2>Destination 3 : Trinidad - Un voyage dans le temps</h2>
<p>Trinidad, une ville coloniale préservée, est comme un voyage dans le temps. Ses rues pavées, ses maisons colorées et ses places pittoresques vous ramènent à l''époque de la domination espagnole. Explorez les musées fascinants, visitez les églises historiques et imprégnez-vous de l''atmosphère animée de la Plaza Mayor. Ne manquez pas non plus la possibilité de danser la salsa dans les clubs locaux et d''apprécier la chaleur de l''accueil cubain.</p>

<h2>Destination 4 : Viñales - Beauté naturelle et culture du tabac</h2>
<p>Si vous êtes amateur de paysages naturels à couper le souffle, ne manquez pas Viñales. Cette région montagneuse, inscrite au patrimoine mondial de l''UNESCO, est célèbre pour ses mogotes, de spectaculaires formations rocheuses, et ses plantations de tabac. Vous pouvez vous promener à cheval ou à vélo dans la vallée de Viñales, visiter des fermes de tabac et en apprendre davantage sur le processus de fabrication des cigares cubains. Profitez également de l''hospitalité des habitants et de la délicieuse cuisine locale.</p>

<p>Un voyage à Cuba est une aventure inoubliable qui vous fera découvrir une culture vibrante, des paysages à couper le souffle et des habitants chaleureux. Entre les rues animées de La Havane, les plages de sable blanc de Varadero, l''atmosphère coloniale de Trinidad et les paysages spectaculaires de Viñales, vous serez émerveillé à chaque étape de votre voyage. Alors, préparez vos valises et partez à la découverte de cette île enchanteresse qu''est Cuba !</p>', 
'https://api-oblog2.onrender.com/images/cuba.jpg',
1);

INSERT INTO "article_has_category"("article_id","category_id") VALUES
(1,5),
(2,1),
(3,3),
(4,4),
(5,2),
(6,7),
(7,6),
(8,3),
(9,3);

INSERT INTO "user_has_favorites"("article_id", "user_id") VALUES 
(1,1),
(2,1),
(3,2),
(4,2);


COMMIT;

