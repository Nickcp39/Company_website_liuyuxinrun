% 设置图片文件夹路径
inputFolder = 'amazing_photos';
outputFolder = inputFolder;  % 保存回同一文件夹

% 支持的图片格式
formats = {'*.jpg', '*.jpeg', '*.JPG', '*.JPEG', '*.bmp', '*.tif', '*.tiff'};

% 遍历所有格式
for k = 1:length(formats)
    files = dir(fullfile(inputFolder, formats{k}));
    for i = 1:length(files)
        % 读取图像
        [~, name, ~] = fileparts(files(i).name);
        img = imread(fullfile(inputFolder, files(i).name));

        % 写为 PNG 格式
        outputFile = fullfile(outputFolder, [name, '.png']);
        imwrite(img, outputFile);

        % 可选：删除原文件
        delete(fullfile(inputFolder, files(i).name));

        fprintf('转换并保存: %s -> %s\n', files(i).name, [name, '.png']);
    end
end
