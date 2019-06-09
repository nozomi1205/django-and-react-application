#!/usr/bin/env python
import os
import sys

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'manager_project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    ### python3 manage.py runserver react will build react app automatically
    try:
        src = "build/img/"
        dst = "build/static/img/"
        if sys.argv[2] == "react":
            project_root = os.getcwd()
            os.chdir(os.path.join(project_root, "frontend-react/home"))
            os.system("npm run build")
            os.chdir(project_root)
            os.chdir(os.path.join(project_root, "frontend-react/photography"))
            os.system("npm run build")
            os.chdir(project_root)
            os.chdir(os.path.join(project_root, "frontend-react/recents"))
            os.system("npm run build")
            os.mkdir(dst)
            for f in os.listdir(src):
                os.rename(src+f, dst+f)
            os.chdir(project_root)
            sys.argv.pop(2)
        execute_from_command_line(sys.argv)
    except IndexError:
        execute_from_command_line(sys.argv)
    else:
        execute_from_command_line(sys.argv)
    execute_from_command_line(sys.argv)
