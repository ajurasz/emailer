import pug from 'pug';
import path from 'path';

const compiledSurveyTemplate = pug.compileFile(
  path.join(__dirname, 'templates', 'survey.pug')
);

export const surveyTemplate = survey => {
  return compiledSurveyTemplate({
    body: survey.body,
    redirectTo: `${process.env.DOMAIN}/thanks`
  });
};
