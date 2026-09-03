# Extração dos 7 JSONs de speaker notes (Insurance)

Este passo a passo usa o script `build/extract-speaker-notes.gs` já configurado com os 7 file IDs do treinamento.

## 1) Criar projeto Apps Script

1. Abra qualquer um dos seus Google Slides.
2. Clique em **Extensions > Apps Script**.
3. Crie um projeto.
4. Copie o conteúdo de `build/extract-speaker-notes.gs` para o editor.

## 2) Ativar serviços

1. No editor do Apps Script, clique em **Services** (ícone `+`).
2. Adicione **Drive API**.
3. Se solicitado no Google Cloud Project vinculado, habilite também a Drive API.

## 3) Executar extração

1. Selecione a função `extractAllDays`.
2. Clique em **Run**.
3. Autorize as permissões solicitadas.

## 4) Coletar links dos arquivos gerados

1. Abra **Executions** e entre na execução mais recente.
2. Abra **Logs**.
3. Copie os campos `outputFileUrl` retornados no array de resultado.

## 5) Baixar os 7 JSONs

1. Abra cada `outputFileUrl`.
2. Faça download dos 7 arquivos JSON.
3. Renomeie para:
   - `d1.json`
   - `d2.json`
   - `d3.json`
   - `d4.json`
   - `d5.json`
   - `d6.json`
   - `d7.json`

## 6) Colocar no portal

1. Crie a pasta `src/portal/content/` (se ainda não existir).
2. Salve os arquivos `d1.json` a `d7.json` dentro dessa pasta.

## IDs usados (já configurados no script)

- d1: `1P6kRYaohnf_pDdeza3aAs-v2oZu7Le3XD1Ax1PhchJM`
- d2: `1_-McEXTLYPfmiKy3L4ZwJ0f5IGVamjRRoHN13XZKNOU`
- d3: `1BWPRIQVi_hgp-CZPZ-3nTMoHaFmDfFHGIOEM94178pM`
- d4: `1Q_D7hkwj0aukIiEQhxqYXrCe2zlJSv03h_BulOhktGI`
- d5: `14HRc5YNbyMeIbUS4PmlzcYlQc7Uf7AT9ZSs8BCULFoY`
- d6: `1ygyUOjaqfFXmG6MJBTZAd1JyCt-ws3JpMUDz53hVaOU`
- d7: `16R-jqHUf7b3a1d7DifIGWcRZXJ8xibQ1U9YWJfHmdm8`
