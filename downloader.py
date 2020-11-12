import os
import json
import subprocess

data_files = [f for f in os.listdir() if f.endswith(".json")]
for f in data_files:
    with open(f, "r") as json_file:
        data = json.load(json_file)
        cur_dir = os.path.join(os.getcwd(), data["name"])
        if not os.path.isdir(cur_dir):
            os.mkdir(cur_dir)
        idx = 0
        #already_downloaded = os.listdir(cur_dir)
        for v_link in data["video_links"]:
            idx+=1
            fname =  "{}_{}".format(data["name"], idx)
            if (fname +".mp4") not in os.listdir(cur_dir):
                print(fname+ " indiriliyor...")
                command = ["zoomdl", "-u", v_link, "-f", os.path.join(cur_dir, fname)]
                subprocess.check_output(command)
            else:
                print(fname + " zaten indirildi.")