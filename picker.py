#!/usr/bin/env python3
"""Simple command‑line student picker.

This script provides functionality similar to the original JavaScript
version: it keeps a list of names in a JSON file, allows you to add
(or bulk‑add) names, remove them, list them and choose one at random.

Usage examples:
    python picker.py add "Alice, Bob;Charlie\nDaniel"   # add several
    python picker.py list                             # show current list
    python picker.py pick                             # choose a random name
    python picker.py remove 2                         # delete index 2 (0‑based)

The storage file is created next to the script as ``students.json``.
"""

import argparse
import json
import os
import random
import sys

STORAGE_FILE = os.path.join(os.path.dirname(__file__), 'students.json')


def load_students():
    if not os.path.exists(STORAGE_FILE):
        return []
    with open(STORAGE_FILE, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return []


def save_students(students):
    with open(STORAGE_FILE, 'w', encoding='utf-8') as f:
        json.dump(students, f, ensure_ascii=False, indent=2)


def add_students(raw_text):
    """Accepts a string containing names separated by commas, semicolons or newlines."""
    names = [name.strip() for name in
             __import__('re').split(r"[,;\n]+", raw_text)
             if name.strip()]
    if not names:
        print('No valid names provided.', file=sys.stderr)
        return
    students = load_students()
    added = 0
    dupes = 0
    for name in names:
        if name not in students:
            students.append(name)
            added += 1
        else:
            dupes += 1
    save_students(students)
    if added or dupes:
        print(f"{added} added, {dupes} duplicates ignored.")


def list_students():
    students = load_students()
    if not students:
        print('No students saved yet.')
        return
    for idx, name in enumerate(students):
        print(f"[{idx}] {name}")


def remove_student(index):
    students = load_students()
    try:
        removed = students.pop(index)
    except Exception:
        print('Invalid index.', file=sys.stderr)
        return
    save_students(students)
    print(f"Removed: {removed}")


def pick_student():
    students = load_students()
    if not students:
        print('No students to pick from.', file=sys.stderr)
        return
    choice = random.choice(students)
    print(f"🎉 Selected: {choice}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Student picker tool')
    sub = parser.add_subparsers(dest='command')

    sub.add_parser('list', help='List saved students')
    sub.add_parser('pick', help='Pick a random student')
    a = sub.add_parser('add', help='Add one or more students')
    a.add_argument('names', nargs='+', help='Names (quotes preserve spaces)')
    r = sub.add_parser('remove', help='Remove student by index')
    r.add_argument('index', type=int, help='Zero-based index to remove')

    args = parser.parse_args()
    if args.command == 'add':
        add_students(' '.join(args.names))
    elif args.command == 'list':
        list_students()
    elif args.command == 'pick':
        pick_student()
    elif args.command == 'remove':
        remove_student(args.index)
    else:
        parser.print_help()
