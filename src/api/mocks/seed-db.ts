import {db} from './db';
import {testData} from "@/api/mocks/test-data";

export const seedDb = () => {
  if (db.project.count() > 0) {
    return;
  }

  testData.projects.forEach(project =>
    db.project.create(project)
  );

  testData.tags.forEach(tag =>
    db.tag.create(tag)
  );

  testData.reports.forEach(report =>
    db.report.create(report)
  );

}
