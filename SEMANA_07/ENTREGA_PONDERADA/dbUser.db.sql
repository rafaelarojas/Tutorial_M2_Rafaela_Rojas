BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "descricao" (
	"descricao"	TEXT NOT NULL,
	"id"	INTEGER NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "descricao" ("descricao","id") VALUES ('Aplicação web ''GABA'' feita para professores mapearem defasagens educacionais.',1),
 ('Aplicação ''GABA'' feita para mapear defasagens educacionais',2),
 ('Jogo ''MyTruck'' feita para conscientizar sobre boas práticas no trânsito.',3);
COMMIT;
